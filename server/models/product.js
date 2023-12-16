import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    image: {
        required: true,
        type: String,
    },
    category: {
        required: true,
        type: String,
    },
    price: {
        required: true,
        type: Number,
    },
    description: {
        required: true,
        type: String,
    },
})

const Product = mongoose.model("Product", productSchema)

export default Product