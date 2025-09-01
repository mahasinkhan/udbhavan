// controllers/quizController.js
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";
import Quiz from "../models/Quiz.js";
import Teacher from "../models/Teacher.js";
import Batch from "../models/Batch.js";

// ------------------- CREATE QUIZ -------------------
export const createQuiz = catchAsync(async (req, res) => {
  const { teacherId, batchId, title, questions } = req.body;

  const teacher = await Teacher.findById(teacherId);
  if (!teacher) throw new ApiError(404, "Teacher not found");

  const batch = await Batch.findById(batchId);
  if (!batch) throw new ApiError(404, "Batch not found");

  const quiz = await Quiz.create({
    teacher: teacherId,
    batch: batchId,
    title,
    questions,
  });

  // Add quiz reference to teacher
  teacher.createdQuizzes.push(quiz._id);
  await teacher.save();

  res.status(201).json({ success: true, data: quiz });
});

// ------------------- GET ALL QUIZZES -------------------
export const getAllQuizzes = catchAsync(async (req, res) => {
  const quizzes = await Quiz.find()
    .populate("teacher", "name email")
    .populate("batch", "name class")
    .sort({ createdAt: -1 });

  res.status(200).json({ success: true, data: quizzes });
});

// ------------------- GET SINGLE QUIZ -------------------
export const getQuizById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const quiz = await Quiz.findById(id)
    .populate("teacher", "name email")
    .populate("batch", "name class");

  if (!quiz) throw new ApiError(404, "Quiz not found");

  res.status(200).json({ success: true, data: quiz });
});

// ------------------- UPDATE QUIZ -------------------
export const updateQuiz = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { title, questions } = req.body;

  const quiz = await Quiz.findById(id);
  if (!quiz) throw new ApiError(404, "Quiz not found");

  if (title) quiz.title = title;
  if (questions) quiz.questions = questions;

  await quiz.save();

  res.status(200).json({ success: true, data: quiz });
});

// ------------------- DELETE QUIZ -------------------
export const deleteQuiz = catchAsync(async (req, res) => {
  const { id } = req.params;

  const quiz = await Quiz.findByIdAndDelete(id);
  if (!quiz) throw new ApiError(404, "Quiz not found");

  // Remove quiz reference from teacher
  await Teacher.findByIdAndUpdate(quiz.teacher, {
    $pull: { createdQuizzes: quiz._id },
  });

  res.status(200).json({ success: true, message: "Quiz deleted successfully" });
});
