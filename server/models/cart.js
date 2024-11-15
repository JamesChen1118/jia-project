import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    numbers: {
        type: Number,
        required: true,
        min: 0
    },
    price: {
        type: Number,
        required: true
    },
    name: String,
    image: String
});

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [cartItemSchema],
    totalAmount: {
        type: Number,
        default: 0
    },
    paymentInfo: {
        cardNumbers: [String],
        expiryYear: String,
        expiryMonth: String,
        cvv: String
    },
    status: {
        type: String,
        enum: ['active', 'completed', 'cancelled'],
        default: 'active'
    }
}, {
    timestamps: true
});

export default mongoose.model("Cart", cartSchema); 