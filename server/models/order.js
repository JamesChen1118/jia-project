import mongoose from "mongoose";

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
    orderItems: [{
        _id: String,
        name: String,
        numbers: Number,
        price: Number
    }],
    paymentInfo: {
        cardNumbers: String,
        expiryMonth: String,
        expiryYear: String,
        cvv: String
    },
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending'
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

export default mongoose.model('Order', orderSchema);

