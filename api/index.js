import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
    console.log("Mongodb is connected");
}).catch((err) => {
    console.log("Error: " + err);
});



const app = express();

app.listen(3000, () => {
    console.log("Port is running on 3000");
})