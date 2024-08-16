import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: String, required: true },
  projectId: { type: String, required: true },
  creationDate: { type: Date, required: true },
  lastUpdateDate: { type: Date, required: true },
  content: { type: String, required: true },
});

const fileModel = mongoose.model("Files", fileSchema);

export default fileModel;
