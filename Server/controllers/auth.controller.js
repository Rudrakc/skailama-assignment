import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import Env from "../env.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, userName, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await userModel.create({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword,
      projects: [],
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await userModel.findOne({ userName });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid Password" });
    }
    const token = jwt.sign(
      { userName: user.userName, id: user._id },
      Env.JWT_SECRET,
      { expiresIn: "10d" }
    );
    res.status(200).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const validateToken = async (req, res) => {
  try {
    const { token } = req.body;
    const decodedData = jwt.verify(token, Env.JWT_SECRET);
    if (!decodedData) {
      return res.status(401).json({ message: "Invalid Token" });
    }
    res.status(200).json({ message: "Token Validation Successfull" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
