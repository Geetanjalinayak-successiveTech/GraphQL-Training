import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/graphQl-training");
    console.log("Database connected Successfully");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
    
  }
};
