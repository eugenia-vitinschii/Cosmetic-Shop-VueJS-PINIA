//server.ts

import express from 'express';
import cors from 'cors';

//folders
import authRoutes from "./routes/authRoutes"

const app = express()
const PORT = process.env.PORT || 4000;

//middleware
app.use(cors())
app.use(express.json())

//routes
app.use("/api/auth", authRoutes)


app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`)
})