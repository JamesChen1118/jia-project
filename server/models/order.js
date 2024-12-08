import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderNumber: {
        type: String,
        required: true,
        unique: true
    },
    items: [orderItemSchema],
    totalAmount: {
        type: Number,
        required: true
    },
    paymentInfo: {
        cardNumber: String,
        paymentStatus: {
            type: String,
            enum: ['pending', 'completed', 'failed'],
            default: 'pending'
        },
        paymentDate: Date
    },
    customerInfo: {
        username: String,
        phone: String,
        email: String
    }
}, {
    timestamps: true
});

export default mongoose.model('Order', orderSchema);

