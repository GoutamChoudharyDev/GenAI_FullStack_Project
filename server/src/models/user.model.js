import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true })

export const User = mongoose.model("User", userSchema);