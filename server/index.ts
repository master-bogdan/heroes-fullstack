import express from 'express';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes';

dotenv.config();
const app = express();

// Basic Configuration
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Router
app.use(router);

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
