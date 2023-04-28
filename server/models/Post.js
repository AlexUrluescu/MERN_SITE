import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    user_name:{
        type: String,
        required: true,
        trim: true
    }
})

export default mongoose.model('Post', postSchema);