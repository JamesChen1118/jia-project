import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        date: {
            type: String,
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
        },
        tableNo: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

export default mongoose.model("Reservation", reservationSchema);