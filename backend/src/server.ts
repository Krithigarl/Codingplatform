import express from "express"
import connectDB from "./config/db"
import env from "dotenv"
const app = express()

env.config()
connectDB();
app.use(express.json());


app.listen(process.env.PORT || 3000,()=>{console.log("Server is running on port address " + (process.env.PORT || 3000))})