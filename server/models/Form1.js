import mongoose from "mongoose";

const form1Schema = new mongoose.Schema({
    coleges:{
        type: String,
        required: true,
        trim: true
    },
    class_plus:{
        type: String,
        required: true,
        trim: true
    },
    teacher_help:{
        type: String,
        required: true,
        trim: true
    },
    city:{
        type: String,
        required: true,
        trim: true
    },

    hobby:{
        type: String,
        required: true,
        trim: true
    },

    study_hours:{
        type: String,
        required: true,
        trim: true
    },

    concentration:{
        type: String,
        required: true,
        trim: true
    },

    teacher_comunication:{
        type: String,
        required: true,
        trim: true
    }
})

export default mongoose.model('Post', form1Schema);