// controllers/noticeController.js
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";
import Notice from "../models/Notice.js";
import Admin from "../models/Admin.js";

// ------------------- CREATE NOTICE -------------------
export const createNotice = catchAsync(async (req, res) => {
  const { title, content, issuedById, target } = req.body;

  const admin = await Admin.findById(issuedById);
  if (!admin) return new ApiError(404, "Admin not found");

  const notice = await Notice.create({
    title,
    content,
    issuedBy: issuedById,
    target: target || "all",
  });

  res.status(201).json({ success: true, data: notice });
});

// ------------------- GET ALL NOTICES -------------------
export const getAllNotices = catchAsync(async (req, res) => {
  const notices = await Notice.find()
    .populate("issuedBy", "name email role")
    .sort({ createdAt: -1 });

  res.status(200).json({ success: true, data: notices });
});

// ------------------- GET SINGLE NOTICE -------------------
export const getNoticeById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const notice = await Notice.findById(id).populate("issuedBy", "name email role");
  if (!notice) return new ApiError(404, "Notice not found");

  res.status(200).json({ success: true, data: notice });
});

// ------------------- UPDATE NOTICE -------------------
export const updateNotice = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { title, content, target } = req.body;

  const notice = await Notice.findById(id);
  if (!notice) return new ApiError(404, "Notice not found");

  if (title) notice.title = title;
  if (content) notice.content = content;
  if (target) notice.target = target;

  await notice.save();

  res.status(200).json({ success: true, data: notice });
});

// ------------------- DELETE NOTICE -------------------
export const deleteNotice = catchAsync(async (req, res) => {
  const { id } = req.params;

  const notice = await Notice.findByIdAndDelete(id);
  if (!notice) return new ApiError(404, "Notice not found");

  res.status(200).json({ success: true, message: "Notice deleted successfully" });
});
