import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodroute.js';
import userRouter from './routes/userroute.js';

import 'dotenv/config'
import cartRouter from './routes/cartroute.js';
import orderRouter from './routes/orderroute.js';


//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.send("API  working")
})

//db connection
connectDB();

// api endpoints

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.listen(port,()=>{
    console.log(`server is running at:http://localhost:${port}`)
})

