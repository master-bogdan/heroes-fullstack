import { Express } from 'express';
import mongoose from 'mongoose';

// Basic Configuration
const PORT = process.env.PORT || 3001;

export const bootstrap = async (app: Express) => {
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
