// controllers/complaintController.js
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";
import Complaint from "../models/Complaint.js";
import Student from "../models/student.model.js";
import Teacher from "../models/Teacher.js";
import Admin from "../models/Admin.js";

// ------------------- CREATE COMPLAINT -------------------
export const createComplaint = catchAsync(async (req, res) => {
  const { studentId, teacherId, description } = req.body;

  const student = await Student.findById(studentId);
  const teacher = await Teacher.findById(teacherId);

  if (!student) return new ApiError(404, "Student not found");
  if (!teacher) return new ApiError(404, "Teacher not found");

  const complaint = await Complaint.create({ student: studentId, teacher: teacherId, description });
  res.status(201).json({ success: true, data: complaint });
});

// ------------------- GET ALL COMPLAINTS -------------------
export const getAllComplaints = catchAsync(async (req, res) => {
  const complaints = await Complaint.find()
    .populate("student", "name email")
    .populate("teacher", "name email")
    .populate("resolvedBy", "name email role");

  res.status(200).json({ success: true, data: complaints });
});

// ------------------- GET SINGLE COMPLAINT -------------------
export const getComplaintById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const complaint = await Complaint.findById(id)
    .populate("student", "name email")
    .populate("teacher", "name email")
    .populate("resolvedBy", "name email role");

  if (!complaint) return new ApiError(404, "Complaint not found");

  res.status(200).json({ success: true, data: complaint });
});

// ------------------- UPDATE COMPLAINT -------------------
export const updateComplaint = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { status, resolvedById } = req.body;

  const complaint = await Complaint.findById(id);
  if (!complaint) return new ApiError(404, "Complaint not found");

  if (status) complaint.status = status;

  if (resolvedById) {
    const admin = await Admin.findById(resolvedById);
    if (!admin) return new ApiError(404, "Admin not found to resolve complaint");
    complaint.resolvedBy = resolvedById;
  }

  await complaint.save();

  res.status(200).json({ success: true, data: complaint });
});

// ------------------- DELETE COMPLAINT -------------------
export const deleteComplaint = catchAsync(async (req, res) => {
  const { id } = req.params;

  const complaint = await Complaint.findByIdAndDelete(id);
  if (!complaint) return new ApiError(404, "Complaint not found");

  res.status(200).json({ success: true, message: "Complaint deleted successfully" });
});
