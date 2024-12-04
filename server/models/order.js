import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
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
        items: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            name: String,
            quantity: Number,
            price: Number
        }],
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
        status: {
            type: String,
            enum: ['pending', 'processing', 'completed', 'cancelled'],
            default: 'pending'
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Order', orderSchema);