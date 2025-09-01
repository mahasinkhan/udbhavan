// controllers/resultController.js
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";
import Result from "../models/Result.js";
import Student from "../models/Student.js";
import Quiz from "../models/Quiz.js";

// ------------------- ADD RESULT -------------------
export const addResult = catchAsync(async (req, res) => {
  const { studentId, quizId, score, total } = req.body;

  const student = await Student.findById(studentId);
  if (!student) throw new ApiError(404, "Student not found");

  const quiz = await Quiz.findById(quizId);
  if (!quiz) throw new ApiError(404, "Quiz not found");

  const percentage = (score / total) * 100;

  const result = await Result.create({
    student: studentId,
    quiz: quizId,
    score,
    total,
    percentage,
  });

  // Add result reference to student
  student.results.push(result._id);
  await student.save();

  res.status(201).json({ success: true, data: result });
});

// ------------------- GET ALL RESULTS -------------------
export const getAllResults = catchAsync(async (req, res) => {
  const results = await Result.find()
    .populate("student", "name email class")
    .populate("quiz", "title batch")
    .sort({ createdAt: -1 });

  res.status(200).json({ success: true, data: results });
});

// ------------------- GET RESULTS FOR A STUDENT -------------------
export const getResultsByStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;

  const student = await Student.findById(studentId);
  if (!student) throw new ApiError(404, "Student not found");

  const results = await Result.find({ student: studentId })
    .populate("quiz", "title batch")
    .sort({ createdAt: -1 });

  res.status(200).json({ success: true, data: results });
});

// ------------------- GET RESULTS FOR A QUIZ -------------------
export const getResultsByQuiz = catchAsync(async (req, res) => {
  const { quizId } = req.params;

  const quiz = await Quiz.findById(quizId);
  if (!quiz) throw new ApiError(404, "Quiz not found");

  const results = await Result.find({ quiz: quizId })
    .populate("student", "name email class")
    .sort({ createdAt: -1 });

  res.status(200).json({ success: true, data: results });
});

// ------------------- DELETE RESULT -------------------
export const deleteResult = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await Result.findByIdAndDelete(id);
  if (!result) throw new ApiError(404, "Result not found");

  // Remove reference from student
  await Student.findByIdAndUpdate(result.student, {
    $pull: { results: result._id },
  });

  res.status(200).json({ success: true, message: "Result deleted successfully" });
});
