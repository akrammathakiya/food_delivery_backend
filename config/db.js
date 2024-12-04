import mongoose from "mongoose";


 export const connectDB = async()=>{
    await mongoose.connect(
      "mongodb+srv://mathakiyaakram:9327963166@cluster0.nmlvb.mongodb.net/food_ordering"
    )
    .then(()=>console.log("DB connected!!"))
}