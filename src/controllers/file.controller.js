import fileModel from "../models/fileModel.js";
import projectModel from "../models/projectModel.js";

const createFile = async (req, res) => {
  try {
    const { name, owner, projectId, content } = req.body;
    const file = await fileModel.create({
      name,
      owner,
      projectId,
      content,
      creationDate: new Date(),
      lastUpdateDate: new Date(),
    });

    // Add file to Project's files array
    const project = await projectModel.findById(projectId);
    project.episodes.push(file._id);
    await project.save();

    await file.save();
    res.status(201).json(file);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getFilesById = async (req, res) => {
  try {
    const { fileId } = req.params;
    const file = await fileModel.findById(fileId);
    if (!file) {
      return res.status(404).json({
        message: "File not found",
      });
    }

    res.status(200).json(file);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const updateFile = async (req, res) => {
  try {
    const { fileId } = req.params;
    const { content } = req.body;
    const file = await fileModel.findById(fileId);

    if (!file) {
      return res.status(404).json({
        message: "File not found",
      });
    }

    file.content = content;
    file.lastUpdateDate = new Date();
    await file.save();

    res.status(200).json({
      message: "File Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export { createFile, getFilesById, updateFile };
