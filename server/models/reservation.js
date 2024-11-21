import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        people: {
            type: Number,
            required: true,
            min: 1,
            max: 10
        },
        tableId: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'confirmed', 'cancelled'],
            default: 'pending'
        }
    },
    { timestamps: true }
);

export default mongoose.model("Reservation", reservationSchema);