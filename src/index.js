import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import connectDB from "./db/index.js";

const app = express();
dotenv.config(); // No path needed if file is named `.env` in root
console.log("Loaded URI:", process.env.MONGODB_URI);
connectDB().then(() => {
  app.listen(process.env.PORT ||8000 , () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}).catch((error) => {
  console.error("Database connection failed:", error);
});















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