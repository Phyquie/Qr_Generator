import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    img: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
}},
    {timestamps: true});

const Service = mongoose.model("Service", ServiceSchema);
export default Service;