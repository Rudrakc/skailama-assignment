import projectModel from "../models/projectModel.js";
import userModel from "../models/userModel.js";

const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await projectModel.findById(id);
    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const createProject = async (req, res) => {
  try {
    const { name, owner } = req.body;
    const project = await projectModel.create({
      name,
      owner,
      episodes: [],
      creationDate: new Date(),
      lastUpdateDate: new Date(),
    });

    // Add project to User's projects array
    const user = await userModel.findById(owner);
    user.projects.push(project._id);
    await user.save();

    res.status(201).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export { getProjectById, createProject };
