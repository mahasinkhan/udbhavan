// src/routes/authRoutes.js
import express from "express";
import {
  registerAdmin,
  registerTeacher,
  registerStudent,
  login,
  logout,
  refreshToken
} from "../controllers/authController.js";

const router = express.Router();

// Registration
router.post("/register/admin", registerAdmin);
router.post("/register/teacher", registerTeacher);
router.post("/register/student", registerStudent);

// Auth
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);

export default router;
