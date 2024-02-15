import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL).then(()=>console.log("connected mongodb"));
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};

export default connectToMongo;
