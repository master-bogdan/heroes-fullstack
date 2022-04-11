import mongoose, { Connection } from 'mongoose';
import { consoleMessage } from '../common/utils/console-message';

export const connectDB = async (url: string) => {
  try {
    const { connection } = await mongoose.connect(url, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    consoleMessage.system('⚡️[db]: Database connected');

    return connection;
  } catch (error) {
    consoleMessage.error(error as string);
    return process.exit(0);
  }
};

export const cleanDB = async (connection: Connection) => {
  const collections = await connection.db.collections();
  // eslint-disable-next-line
  for (const item of collections) {
    // eslint-disable-next-line
    await item.drop();
  }

  consoleMessage.system('⚡️[db]: Database cleaned!');
};

export const closeDB = async () => {
  await mongoose.disconnect();
  consoleMessage.system('⚡️[db]: Database disconnected');
};
