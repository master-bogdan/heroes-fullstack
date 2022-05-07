import mongoose, { connection } from 'mongoose';
import { logger } from '../common/utils/logger';

export const connectDB = async (url: string) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    logger.system('⚡️[db]: Database connected');
  } catch (error) {
    logger.error(error as string);
    process.exit(1);
  }
};

export const cleanDB = async () => {
  const collections = await connection.db.collections();
  // eslint-disable-next-line
  for (const item of collections) {
    // eslint-disable-next-line
    await item.drop();
  }

  logger.system('⚡️[db]: Database cleaned!');
};

export const closeDB = async () => {
  await connection.close();
  logger.system('⚡️[db]: Database disconnected');
};
