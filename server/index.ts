import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import api from './routes/api';
import auth from './routes/auth';

dotenv.config();
const app = express();

// Basic Configuration
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Auth
app.use(auth);

// API
app.use('/api', api);

// Error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

const start = async () => {
  try {
    await mongoose.connection.on('connected', () => {
      console.log('mongoose connected');
    });
    await mongoose.connect(`${process.env.MONGO_URI}`, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
