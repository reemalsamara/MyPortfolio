

import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String },          // optional
        message: { type: String, required: true },
    },
    { timestamps: true } // adds createdAt, updatedAt
);

export default mongoose.model("Contact", contactSchema);
