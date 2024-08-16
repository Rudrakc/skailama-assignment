import dotenv from "dotenv";

dotenv.config();

class Env {
  static PORT = process.env.PORT || 3000; //default port to listen
  static MONGODB_URL = process.env.MONGODB_URL; // MongoDB connection URI
  static JWT_SECRET = process.env.JWT_SECRET; // JWT Secret Key
}
export default Env;
