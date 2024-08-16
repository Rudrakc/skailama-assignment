import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: String, required: true },
  creationDate: { type: Date, required: true },
  lastUpdateDate: { type: Date, required: true },
  episodes: { type: Array, required: true },
});

const projectModel = mongoose.model("Project", projectSchema);

export default projectModel;
