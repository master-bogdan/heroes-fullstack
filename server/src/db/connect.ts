import mongoose from 'mongoose';

export const connectDB = (url: string) => mongoose.connect(url, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
