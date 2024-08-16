import express from "express";
import {
  createFile,
  getFilesById,
  updateFile,
} from "../controllers/file.controller.js";

const router = express.Router();

router.get("/:fileId", getFilesById);
router.post("/", createFile);
router.put("/:fileId", updateFile);

export default router;
