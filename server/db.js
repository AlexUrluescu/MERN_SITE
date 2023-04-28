import mongoose from "mongoose";

export async function connectDB(){
    try {
        await mongoose.connect("mongodb+srv://seher23:parola23@cluster0.x1kw7ly.mongodb.net/mongodb?retryWrites=true&w=majority")
        console.log("Database is connected");
        
    } catch (error) {
        console.log(error);
        console.log("Database connection failed");
    }
}
