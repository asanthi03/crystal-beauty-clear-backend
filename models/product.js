import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    productId : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    altNames : {
        type : [String],  //array of names
        default : []
    },
    price : {
        type : Number,
        required : true
    },
    labeledPrice : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    images : {
        type : [String],
        required : true,
        default : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdtNlci9_M_z1mWu0o16A7LQsdiGjWGn1bQ&s"]
    },
    stock : {
        type : Number,
        required : true
    }
})

const Product = mongoose.model("products", productSchema)

export default Product;