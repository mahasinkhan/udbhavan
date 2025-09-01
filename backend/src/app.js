// src/app.js
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

const app = express();

// Middlewares
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// Test route
app.get("/", (req, res) => res.send("API is running..."));

// Mount auth routes
app.use("/api/auth", authRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

export default app;
