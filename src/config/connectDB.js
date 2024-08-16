import mongoose, { model } from "mongoose";
import Env from "../../env.js";

const connectDB = async () => {
  try {
    await mongoose.connect(Env.MONGODB_URL);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection failed", err.message);
  }
};

export default connectDB;
