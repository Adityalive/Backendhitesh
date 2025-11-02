import express from "express";
import cokkieParser from "cookie-parser";
import cors from "cors";

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credential:true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true}));
app.use(cokkieParser());
app.use(express.static("public"));

const app=express();

export {app};