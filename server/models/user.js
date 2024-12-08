import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const orderSchema = new mongoose.Schema({
    orderNumber: String,
    date: Date,
    amount: Number,
    status: String
});

const historySchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    quantity: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

const reservationSchema = new mongoose.Schema({
    reservationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reservation'
    },
    date: Date,
    time: String,
    people: Number,
    tableNo: String,
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending'
    }
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
        history: [historySchema],
        reservations: [reservationSchema]
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