import mongoose from "mongoose";
import { DB_Name } from "../constant.js";
import express from "express"; 
const app = express();

const connectDB = async () => {
  try {
    const connnectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_Name}`
    );
    console.log("MongoDB connection successful");
    console.log(`DB is connected!! on host: ${connnectionInstance.connection.host}`);
    
  } catch (error) {
    console.log(`MongoDB connection failed: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
