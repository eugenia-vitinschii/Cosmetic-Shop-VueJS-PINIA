//server.ts

import express from 'express';
import cors from 'cors';
import dotenv from "dotenv"

dotenv.config();

import { connectDB } from './config/db';
import routes from './routes';


const app = express()
const PORT = process.env.PORT || 4000;

//middleware
app.use(cors())
app.use(express.json())
app.use("/api", routes)

connectDB().then(()=> {
   app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`)
})
})