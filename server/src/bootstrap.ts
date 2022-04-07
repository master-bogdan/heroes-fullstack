import { Application } from 'express';
import { connectDB } from './db/connect';
import { consoleMessage } from './common/utils/console-message';
import { config } from './config/config';

export const bootstrap = async (app: Application) => {
  const { PORT, MONGO_URI } = config();

  try {
    await connectDB(MONGO_URI);

    app.listen(PORT, () => {
      consoleMessage.system('⚡️[db]: Database connected');
      consoleMessage.system(`⚡️[server]: Server is running at https://localhost:${PORT}`);
    });
  } catch (error) {
    consoleMessage.error(error as string);
  }
};
