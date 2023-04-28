import mongoose from "mongoose";
import {MONGODB_URI} from "./config.js";

export async function connectDB(){
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("Database is connected");
        
    } catch (error) {
        console.log(error);
        console.log("Database connection failed");
    }
}
