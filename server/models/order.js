import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        orderItems: [
            {
                name: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
                image: {
                    type: String,
                    required: true,
                },
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
            default: 0.0,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
