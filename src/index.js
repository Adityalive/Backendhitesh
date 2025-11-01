import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "./db/index.js";

dotenv.config(); // No path needed if file is named `.env` in root
console.log("Loaded URI:", process.env.MONGODB_URI);
connectDB()















/*const app = express();
(async () => {
  try {
   await mongoose.connect(`${process.env.Mongodb_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error while connecting to MongoDB", error);
    });
  } catch (error) {
    console.log("Error while connecting to MongoDB", error);
    throw error;
  }
})();
*/