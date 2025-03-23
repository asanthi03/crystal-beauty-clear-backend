import mongoose from "mongoose";
import bodyParser from "body-parser";
import express from "express";
import userRouter from "./routes/userRouter.js";
import jwt from "jsonwebtoken";
import productRouter from "./routes/productRouter.js";
import verifyJwt from "./middlewear/auth.js";
import orderRouter from "./routes/orderRouter.js";



const app = express();

mongoose.connect("mongodb+srv://admin:1234@cluster0.tpfta.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(
    ()=>{
        console.log("Connected to database")
    }
).catch(
    ()=>{
        console.log("Connection failed");
    }
)

//put middlewear before apis
app.use(bodyParser.json());
app.use(verifyJwt);




//apis
app.use("/api/User", userRouter);

app.use('/api/product',productRouter);

app.use('/api/order',orderRouter);




app.listen(5000,()=>{
    console.log("Server runs in port 5000");
})