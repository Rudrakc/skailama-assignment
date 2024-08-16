import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/connnectDb.js";
import Env from "./env.js";
import authRoutes from "./routes/auth.route.js";
import projectRoutes from "./routes/project.route.js";
import fileRoutes from "./routes/file.route.js";

dotenv.config();
const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes )
app.use("/api/project", projectRoutes )
app.use("/api/file", fileRoutes )

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(Env.PORT, () => {
  console.log(`Server is running on port ${Env.PORT}`);
});
