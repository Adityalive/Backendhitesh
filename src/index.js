import dotenv from "dotenv";
import { app } from "./app.js"; // ✅ Import the real app with routes
import connectDB from "./db/index.js";
import express from "express";
import mongoose from "mongoose";
dotenv.config();

console.log("Loaded URI:", process.env.MONGODB_URI);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`🚀 Server is running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((error) => {
    console.error("❌ Database connection failed:", error);
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