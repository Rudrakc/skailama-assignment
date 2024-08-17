import express from "express";
import {
  createProject,
  getProjectById,
  getUsersPorjects,
  getProjectsFiles,
} from "../controllers/project.controller.js";

const router = express.Router();

router.get("/:id", getProjectById);
router.get("/owner/:userId", getUsersPorjects);
router.get("/file/:projectId", getProjectsFiles);
router.post("/", createProject);

export default router;
