import express from "express";
import { login, signup, validateToken } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/validate", validateToken);

export default router;