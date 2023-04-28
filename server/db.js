import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

export async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database is connected");
        
    } catch (error) {
        console.log(error);
        console.log("Database connection failed");
    }
}
