//server.ts

import express from 'express';
import cors from 'cors';
import dotenv from "dotenv"

dotenv.config();

import { connectDB } from './config/db';

//folders
import authRoutes from "./routes/auth.routes"
import adminRoutes from "./routes/admin.routes"
import productRoutes from "./routes/product.routes";

const app = express()
const PORT = process.env.PORT || 4000;

//middleware
app.use(cors())
app.use(express.json())

//routes
app.use("/api/auth", authRoutes)
app.use("/admin", adminRoutes)
app.use("/products", productRoutes);

connectDB().then(()=> {
   app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`)
})
})