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
        customerInfo: {
            username: String,
            phone: String,
            email: String
        }
    },
    {
        timestamps: true
    }
);

orderSchema.pre('find', function() {
    this.populate('user', 'username phone email');
});

orderSchema.pre('findOne', function() {
    this.populate('user', 'username phone email');
});

export default mongoose.model('Order', orderSchema);