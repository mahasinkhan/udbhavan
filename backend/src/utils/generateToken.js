// utils/generateToken.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


export const generateToken = (payload, expiresIn = process.env.JWT_EXPIRE_TOKEN) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
};


export const generateRefreshToken = (payload, expiresIn = "7d") => {
  return jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, { expiresIn });
};
