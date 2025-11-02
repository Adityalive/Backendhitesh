import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

// ✅ Declare app first
const app = express();

// ✅ Middleware setup
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true, // ✅ lowercase "credentials"
}));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

// ✅ Routes import
import userRouter from "./routes/user.routes.js";

// ✅ Routes declaration
app.use("/api/v1/users", userRouter);

app.get("/ping", (req, res) => {
  res.send("pong");
});
export { app };