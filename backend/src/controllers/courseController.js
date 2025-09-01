// controllers/courseController.js
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";
import Course from "../models/Course.js";
import Batch from "../models/Batch.js";
import Lesson from "../models/Lesson.js";

// ------------------- CREATE COURSE -------------------
export const createCourse = catchAsync(async (req, res) => {
  const { title, description } = req.body;

  const course = await Course.create({ title, description });
  res.status(201).json({ success: true, data: course });
});

// ------------------- GET ALL COURSES -------------------
export const getAllCourses = catchAsync(async (req, res) => {
  const courses = await Course.find().populate("batches lessons");
  res.status(200).json({ success: true, data: courses });
});

// ------------------- GET SINGLE COURSE -------------------
export const getCourseById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const course = await Course.findById(id).populate("batches lessons");
  if (!course) return new ApiError(404, "Course not found");

  res.status(200).json({ success: true, data: course });
});

// ------------------- UPDATE COURSE -------------------
export const updateCourse = catchAsync(async (req, res) => {
  const { id } = req.params;

  const course = await Course.findByIdAndUpdate(id, req.body, { new: true });
  if (!course) return new ApiError(404, "Course not found");

  res.status(200).json({ success: true, data: course });
});

// ------------------- DELETE COURSE -------------------
export const deleteCourse = catchAsync(async (req, res) => {
  const { id } = req.params;

  const course = await Course.findByIdAndDelete(id);
  if (!course) return new ApiError(404, "Course not found");

  res.status(200).json({ success: true, message: "Course deleted successfully" });
});

// ------------------- ADD BATCH
