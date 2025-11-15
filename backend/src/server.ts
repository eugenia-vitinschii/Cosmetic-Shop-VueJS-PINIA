//server.ts

import express from 'express';
import cors from 'cors';

const app = express()
const PORT = process.env.PORT || 4000;

app.use(cors())
app.use(express.json())

app.get('/api/hello', (req, res) => {
   res.json({message: "Backend works!"})
})

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`)
})