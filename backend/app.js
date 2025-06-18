import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

async function connection() {
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("MongoDB connected")
    });
}

connection();

import userRoutes from './routes/userRoutes.js';
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
