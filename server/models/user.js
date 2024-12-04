import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const orderSchema = new mongoose.Schema({
    orderNumber: String,
    date: Date,
    amount: Number,
    status: String
});

const historySchema = new mongoose.Schema({
    productName: String,
    date: Date,
    quantity: Number,
    amount: Number
});

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "用戶名不能為空"],
            unique: true,
        },
        phone: {
            type: String,
            required: [true, "電話不能為空"],
        },
        email: {
            type: String,
            required: [true, "郵箱不能為空"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "密碼不能為空"],
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
        orders: [orderSchema],
        history: [historySchema]
    },
    {
        timestamps: true,
    }
);


userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});


userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("User", userSchema);