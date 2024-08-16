import express from "express";
import {
  createProject,
  getProjectById,
} from "../controllers/project.controller.js";

const router = express.Router();

router.get("/:id", getProjectById);
router.post("/", createProject);

export default router;
