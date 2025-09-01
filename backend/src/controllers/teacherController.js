// controllers/teacherController.js
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";
import Teacher from "../models/Teacher.js";
import Batch from "../models/Batch.js";
import Quiz from "../models/Quiz.js";
import Result from "../models/Result.js";
import Student from "../models/Student.js";

// ------------------- GET TEACHER PROFILE -------------------
export const getTeacherProfile = catchAsync(async (req, res) => {
  const teacher = await Teacher.findById(req.teacher._id).select("-password").populate("batches");
  if (!teacher) return new ApiError(404, "Teacher not found");

  res.status(200).json({ success: true, data: teacher });
});

// ------------------- UPDATE TEACHER PROFILE -------------------
export const updateTeacherProfile = catchAsync(async (req, res) => {
  const teacher = await Teacher.findByIdAndUpdate(req.teacher._id, req.body, { new: true }).select("-password");
  if (!teacher) return new ApiError(404, "Teacher not found");

  res.status(200).json({ success: true, data: teacher });
});

// ------------------- GET TEACHER BATCHES -------------------
export const getTeacherBatches = catchAsync(async (req, res) => {
  const teacher = await Teacher.findById(req.teacher._id).populate("batches");
  if (!teacher) return new ApiError(404, "Teacher not found");

  res.status(200).json({ success: true, data: teacher.batches });
});

// ------------------- CREATE QUIZ -------------------
export const createQuiz = catchAsync(async (req, res) => {
  const { batchId, title, questions } = req.body;

  const batch = await Batch.findById(batchId);
  if (!batch) return new ApiError(404, "Batch not found");

  const quiz = await Quiz.create({
    teacher: req.teacher._id,
    batch: batchId,
    title,
    questions,
  });

  // Add quiz to teacher's createdQuizzes
  await Teacher.findByIdAndUpdate(req.teacher._id, { $push: { createdQuizzes: quiz._id } });

  res.status(201).json({ success: true, data: quiz });
});

// ------------------- GET QUIZZES CREATED BY TEACHER -------------------
export const getCreatedQuizzes = catchAsync(async (req, res) => {
  const quizzes = await Quiz.find({ teacher: req.teacher._id }).populate("batch");
  res.status(200).json({ success: true, data: quizzes });
});

// ------------------- GET RESULTS FOR A QUIZ -------------------
export const getQuizResults = catchAsync(async (req, res) => {
  const { quizId } = req.params;

  const quiz = await Quiz.findById(quizId);
  if (!quiz) return new ApiError(404, "Quiz not found");

  const results = await Result.find({ quiz: quizId }).populate("student");
  res.status(200).json({ success: true, data: results });
});

// ------------------- GET STUDENTS OF A BATCH -------------------
export const getStudentsOfBatch = catchAsync(async (req, res) => {
  const { batchId } = req.params;
  const batch = await Batch.findById(batchId).populate("students");
  if (!batch) return new ApiError(404, "Batch not found");

  res.status(200).json({ success: true, data: batch.students });
});
