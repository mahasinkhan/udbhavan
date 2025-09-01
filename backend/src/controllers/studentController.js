// controllers/studentController.js
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";
import Student from "../models/student.model.js";
import Quiz from "../models/quiz.model.js";
import Result from "../models/result.model.js";
import Payment from "../models/payment.model.js";
import Notice from "../models/notice.model.js";
import Batch from "../models/batch.model.js"


// ------------------- GET STUDENT PROFILE -------------------
export const getStudentProfile = catchAsync(async (req, res) => {
  const student = await Student.findById(req.student._id).select("-password").populate("batch");
  if (!student) return new ApiError(404, "Student not found");

  res.status(200).json({ success: true, data: student });
});

// ------------------- UPDATE STUDENT PROFILE -------------------
export const updateStudentProfile = catchAsync(async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.student._id, req.body, { new: true }).select("-password");
  if (!student) return new ApiError(404, "Student not found");

  res.status(200).json({ success: true, data: student });
});

// ------------------- GET STUDENT QUIZZES -------------------
export const getStudentQuizzes = catchAsync(async (req, res) => {
  const student = await Student.findById(req.student._id).populate({
    path: "batch",
    populate: { path: "quizzes" },
  });

  if (!student) return new ApiError(404, "Student not found");

  const quizzes = await Quiz.find({ batch: student.batch._id });
  res.status(200).json({ success: true, data: quizzes });
});

// ------------------- GET STUDENT RESULTS -------------------
export const getStudentResults = catchAsync(async (req, res) => {
  const results = await Result.find({ student: req.student._id }).populate("quiz");
  res.status(200).json({ success: true, data: results });
});

// ------------------- GET PAYMENT HISTORY -------------------
export const getPaymentHistory = catchAsync(async (req, res) => {
  const payments = await Payment.find({ student: req.student._id });
  res.status(200).json({ success: true, data: payments });
});

// ------------------- GET NOTICES -------------------
export const getNotices = catchAsync(async (req, res) => {
  const notices = await Notice.find({ target: { $in: ["all", "students"] } }).populate("issuedBy");
  res.status(200).json({ success: true, data: notices });
});
