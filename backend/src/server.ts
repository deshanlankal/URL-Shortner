import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/dbConfig";
dotenv.config();
connectDB();


const port = process.env.PORT || 5001

const app = express();

app.get("/", (req, res) => {
    res.send("HEllow World!!!");
});

app.listen(port, () => {
    console.log(`server is running : ${port}`);
});