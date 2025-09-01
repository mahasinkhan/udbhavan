// controllers/authController.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";
import { generateToken, generateRefreshToken } from "../utils/generateToken.js";
import Admin from "../models/admin.model.js";
import Teacher from "../models/teacher.model.js";
import Student from "../models/student.model.js";

dotenv.config();

// ------------------- HELPER -------------------
const findUserByEmail = async (email) => {
  let user = await Admin.findOne({ email });
  if (!user) user = await Teacher.findOne({ email });
  if (!user) user = await Student.findOne({ email });
  return user;
};

// ------------------- REGISTER -------------------
// Admin Registration with JWT
export const registerAdmin = catchAsync(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if admin already exists
  const existing = await Admin.findOne({ email });
  if (existing) throw new ApiError(400, "Admin already exists");

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create admin
  const admin = await Admin.create({ name, email, password: hashedPassword });

  // Generate payload and tokens
  const payload = { id: admin._id, role: admin.role };
  const token = generateToken(payload);
  const refreshToken = generateRefreshToken(payload);

  // Set cookies
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  // Send response
  res.status(201).json({
    success: true,
    user: {
      id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      permissions: admin.permissions,
    },
  });
});


// Teacher Registration with JWT
export const registerTeacher = catchAsync(async (req, res) => {
  const {
    name,
    email,
    password,
    phone,
    gender,
    dob,
    subjects,
    batches,
    address,
    qualification,
    experience,
    profilePic,
  } = req.body;

  // Check if teacher already exists
  const existing = await Teacher.findOne({ email });
  if (existing) throw new ApiError(400, "Teacher already exists");

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new teacher
  const teacher = await Teacher.create({
    name,
    email,
    password: hashedPassword,
    phone,
    gender,
    dob,
    subjects,
    batches,
    address,
    qualification,
    experience,
    profilePic,
  });

  // Generate JWT & Refresh Token
  const payload = { id: teacher._id, role: teacher.role };
  const token = generateToken(payload);
  const refreshToken = generateRefreshToken(payload);

  // Set cookies
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.status(201).json({
    success: true,
    user: {
      id: teacher._id,
      name: teacher.name,
      email: teacher.email,
      role: teacher.role,
      phone: teacher.phone,
      gender: teacher.gender,
      dob: teacher.dob,
      subjects: teacher.subjects,
      batches: teacher.batches,
      address: teacher.address,
      qualification: teacher.qualification,
      experience: teacher.experience,
      profilePic: teacher.profilePic,
    },
  });
});


// Student Registration with JWT
export const registerStudent = catchAsync(async (req, res) => {
  const {
    name,
    email,
    password,
    class: studentClass,
    batch,
    contact,
    guardianName,
    guardianContact,
    address,
    dob,
  } = req.body;

  // Check if student already exists
  const existing = await Student.findOne({ email });
  if (existing) throw new ApiError(400, "Student already exists");

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new student
  const student = await Student.create({
    name,
    email,
    password: hashedPassword,
    class: studentClass, // required field
    batch,
    contact,
    guardianName,
    guardianContact,
    address,
    dob,
  });

  // Generate payload and tokens
  const payload = { id: student._id, role: student.role };
  const token = generateToken(payload);
  const refreshToken = generateRefreshToken(payload);

  // Set cookies
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  // Send response
  res.status(201).json({
    success: true,
    user: {
      id: student._id,
      name: student.name,
      email: student.email,
      role: student.role,
      class: student.class,
    },
  });
});

// ------------------- LOGIN -------------------
export const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (!user) throw new ApiError(401, "Invalid email or password");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new ApiError(401, "Invalid email or password");

  const payload = { id: user._id, role: user.role };
  const token = generateToken(payload);
  const refreshToken = generateRefreshToken(payload);

  // Set cookies
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.status(200).json({
    success: true,
    user: { id: user._id, name: user.name, email: user.email, role: user.role },
  });
});

// ------------------- REFRESH TOKEN -------------------
// ------------------- REFRESH TOKEN -------------------
export const refreshToken = catchAsync(async (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) throw new ApiError(400, "Refresh token required");

  jwt.verify(token, process.env.JWT_REFRESH_TOKEN, async (err, decoded) => {
    if (err) throw new ApiError(401, "Invalid refresh token");

    // FIX: fetch user by ID not email
    let user =
      (await Admin.findById(decoded.id)) ||
      (await Teacher.findById(decoded.id)) ||
      (await Student.findById(decoded.id));

    if (!user) throw new ApiError(404, "User not found");

    const newToken = generateToken({ id: user._id, role: user.role });
    const newRefreshToken = generateRefreshToken({ id: user._id, role: user.role });

    // Update cookies
    res.cookie("token", newToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ success: true });
  });
});


// ------------------- LOGOUT -------------------
export const logout = catchAsync(async (req, res) => {
  res.clearCookie("token");
  res.clearCookie("refreshToken");
  res.status(200).json({ success: true, message: "Logged out successfully" });
});
