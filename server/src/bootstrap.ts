import { Express } from 'express';
import { connectDB } from './db/connect';
import { consoleMessage } from './common/utils/console-message';

export const bootstrap = async (app: Express) => {
  const PORT = process.env.PORT || 3001;

  try {
    await connectDB(process.env.MONGO_URI as string);

    app.listen(PORT, () => {
      consoleMessage.system('⚡️[db]: Database connected');
      consoleMessage.system(`⚡️[server]: Server is running at https://localhost:${PORT}`);
    });
  } catch (error) {
    consoleMessage.error(error as string);
  }
};
