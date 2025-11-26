//db.ts

import mongoose from "mongoose";

export const connectDB = async() => {
   const uri = process.env.MONGO_URI;

   if(!uri){
      console.error("MONGO_URI is not defined in .env!");
      process.exit(1);
   }

   try{
      await mongoose.connect(uri);
      console.log("MongoDB connected");
   }catch(err){
      console.error("MongoDB connection error:", err);
      process.exit(1)
   }
};
