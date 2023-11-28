import mongoose from "mongoose";

export const Company = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    sector:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,
    }
})