// middleware/errorMiddleware.js
import ApiError from "../utils/ApiError.js";

// Not Found Middleware
const notFound = (req, res, next) => {
  // Throw structured ApiError
  next(new ApiError(404, `Not Found - ${req.originalUrl}`));
};

// Central Error Handler Middleware
const errorHandler = (err, req, res, next) => {
  // If error is not an instance of ApiError, fallback
  const statusCode = err.statusCode || res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong",
    errors: err.errors || null,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

// Validation Error Handler (for Mongoose & JOI)
const validationErrorHandler = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((val) => val.message);
    return next(new ApiError(400, "Validation Error", messages));
  }
  next(err);
};

// Cast Error Handler (invalid ObjectId in MongoDB)
const castErrorHandler = (err, req, res, next) => {
  if (err.name === "CastError") {
    return next(new ApiError(400, `Invalid ${err.path}: ${err.value}`));
  }
  next(err);
};

// Duplicate Key Error (like unique email conflict in MongoDB)
const duplicateKeyErrorHandler = (err, req, res, next) => {
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue);
    return next(new ApiError(400, `Duplicate field value entered: ${field}`));
  }
  next(err);
};

export {
  notFound,
  errorHandler,
  validationErrorHandler,
  castErrorHandler,
  duplicateKeyErrorHandler,
};
