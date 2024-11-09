import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, '用戶名不能為空'],
        unique: true
    },
    phone: {
        type: String,
        required: [true, '電話不能為空']
    },
    email: {
        type: String,
        required: [true, '郵箱不能為空'],
        unique: true
    },
    password: {
        type: String,
        required: [true, '密碼不能為空']
    }
}, {
    timestamps: true
});

export default mongoose.model("User", userSchema); 