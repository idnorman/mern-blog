import { error } from "console";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log("MongoDB failed to connect: " + error);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
