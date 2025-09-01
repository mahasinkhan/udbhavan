// middlewares/authMiddleware.js
import jwt from "jsonwebtoken";
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";
import Admin from "../models/admin.model.js";
import Teacher from "../models/teacher.model.js";
import Student from "../models/student.model.js";

// Helper to find user by ID
const findUserById = async (id) => {
  let user = await Admin.findById(id);
  if (!user) user = await Teacher.findById(id);
  if (!user) user = await Student.findById(id);
  return user;
};

export const protect = catchAsync(async (req, res, next) => {
  let token;

  // Get token from cookies
  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    throw new ApiError(401, "Not authorized, token missing");
  }

  // Verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // Find user
  const user = await findUserById(decoded.id);
  if (!user) {
    throw new ApiError(401, "User not found");
  }

  req.user = user; // Attach user to request
  next();
});
