import dotenv from "dotenv";

dotenv.config();

console.log("Hii", typeof(process.env.MONGODB_URL));

class Env {
  static PORT = process.env.PORT || 3000; //default port to listen
  static MONGODB_URL = process.env.MONGODB_URL; // MongoDB connection URI
}
export default Env;
