// seed.ts

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import Product from "../models/product.model";
import User from "../models/user.model";
import data from "../../db.json";

const seed = async () =>{
    try{
      await mongoose.connect(process.env.MONGO_URI as string);

      if(Array.isArray(data.cosmetics)){
         await Product.insertMany(data.cosmetics);
         console.log("Product seeded!!!")
      }

      if(Array.isArray(data.users)){
         const bcrypt = await import("bcrypt");
         for (const u of data.users){
            const hashed = await bcrypt.hash(u.password, 10);
            await User.create({ username: u.username, email: u.email, password: hashed, role: u.role || "user"})
         }
         console.log("users seeded")
      }

      await mongoose.disconnect();
      console.log("Sedding finished");

    }catch(err){
      console.error(err);
      process.exit(1);
    }
};

seed();