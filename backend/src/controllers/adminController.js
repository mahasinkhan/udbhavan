// controllers/adminController.js
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";
import Admin from "../models/admin.model.js";
import Student from "../models/student.model.js";
import Teacher from "../models/teacher.model.js";
import Batch from "../models/batch.model.js";
import Quiz from "../models/quiz.model.js";
import Result from "../models/result.model.js";
import Payment from "../models/payment.model.js";
import Notice from "../models/notice.model.js";
import Complaint from "../models/complaint.model.js";

// ------------------- GET ALL USERS -------------------
export const getAllUsers = catchAsync(async (req, res) => {
  const students = await Student.find().select("-password");
  const teachers = await Teacher.find().select("-password");
  const admins = await Admin.find().select("-password");

  res.status(200).json({
    success: true,
    data: { admins, teachers, students },
  });
});

// ------------------- GET SINGLE USER -------------------
export const getUserById = catchAsync(async (req, res, next) => {
  const { id, role } = req.params;
  let user;
  if (role === "student") user = await Student.findById(id).select("-password");
  else if (role === "teacher") user = await Teacher.findById(id).select("-password");
  else if (role === "admin") user = await Admin.findById(id).select("-password");
  else return next(new ApiError(400, "Invalid role"));

  if (!user) return next(new ApiError(404, `${role} not found`));

  res.status(200).json({ success: true, data: user });
});

// ------------------- CREATE STUDENT / TEACHER -------------------
export const createStudent = catchAsync(async (req, res) => {
  const student = await Student.create(req.body);
  res.status(201).json({ success: true, data: student });
});

export const createTeacher = catchAsync(async (req, res) => {
  const teacher = await Teacher.create(req.body);
  res.status(201).json({ success: true, data: teacher });
});

// ------------------- UPDATE USER -------------------
export const updateUser = catchAsync(async (req, res, next) => {
  const { id, role } = req.params;
  let user;
  if (role === "student") user = await Student.findByIdAndUpdate(id, req.body, { new: true });
  else if (role === "teacher") user = await Teacher.findByIdAndUpdate(id, req.body, { new: true });
  else if (role === "admin") user = await Admin.findByIdAndUpdate(id, req.body, { new: true });
  else return next(new ApiError(400, "Invalid role"));

  if (!user) return next(new ApiError(404, `${role} not found`));

  res.status(200).json({ success: true, data: user });
});

// ------------------- DELETE USER -------------------
export const deleteUser = catchAsync(async (req, res, next) => {
  const { id, role } = req.params;
  let user;
  if (role === "student") user = await Student.findByIdAndDelete(id);
  else if (role === "teacher") user = await Teacher.findByIdAndDelete(id);
  else if (role === "admin") user = await Admin.findByIdAndDelete(id);
  else return next(new ApiError(400, "Invalid role"));

  if (!user) return next(new ApiError(404, `${role} not found`));

  res.status(200).json({ success: true, message: `${role} deleted successfully` });
});

// ------------------- MANAGE BATCHES -------------------
export const createBatch = catchAsync(async (req, res) => {
  const batch = await Batch.create(req.body);
  res.status(201).json({ success: true, data: batch });
});

export const getAllBatches = catchAsync(async (req, res) => {
  const batches = await Batch.find().populate("students teachers");
  res.status(200).json({ success: true, data: batches });
});

export const updateBatch = catchAsync(async (req, res, next) => {
  const batch = await Batch.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!batch) return next(new ApiError(404, "Batch not found"));
  res.status(200).json({ success: true, data: batch });
});

export const deleteBatch = catchAsync(async (req, res, next) => {
  const batch = await Batch.findByIdAndDelete(req.params.id);
  if (!batch) return next(new ApiError(404, "Batch not found"));
  res.status(200).json({ success: true, message: "Batch deleted successfully" });
});

// ------------------- MANAGE NOTICES -------------------
export const createNotice = catchAsync(async (req, res) => {
  const notice = await Notice.create(req.body);
  res.status(201).json({ success: true, data: notice });
});

export const getAllNotices = catchAsync(async (req, res) => {
  const notices = await Notice.find().populate("issuedBy");
  res.status(200).json({ success: true, data: notices });
});

// ------------------- MANAGE COMPLAINTS -------------------
export const getAllComplaints = catchAsync(async (req, res) => {
  const complaints = await Complaint.find().populate("student teacher resolvedBy");
  res.status(200).json({ success: true, data: complaints });
});

export const resolveComplaint = catchAsync(async (req, res, next) => {
  const complaint = await Complaint.findByIdAndUpdate(
    req.params.id,
    { status: "resolved", resolvedBy: req.admin._id },
    { new: true }
  );
  if (!complaint) return next(new ApiError(404, "Complaint not found"));
  res.status(200).json({ success: true, data: complaint });
});
