import mongoose from "mongoose";

const connectDB =()=>{
    try{
        mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/ai-coding-platform")
        console.log("MongoDB connected")
    }
    catch(err){
        console.error("something went wrong:",err)
    }
}

export default connectDB