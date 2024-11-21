import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        orderItems: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                name: String,
                image: String
            },
        ],
        paymentInfo: {
            cardNumbers: {
                type: String,
                required: true,
            },
            expiryYear: {
                type: String,
                required: true,
            },
            expiryMonth: {
                type: String,
                required: true,
            },
            cvv: {
                type: String,
                required: true,
            },
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            default: 'pending'
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
