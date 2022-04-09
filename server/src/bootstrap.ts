import { Express } from 'express';
import { connectDB } from './db/connect';
import { consoleMessage } from './common/utils/console-message';
import { config } from './config/config';
import app from './app';

const bootstrap = async (): Promise<Express> => {
  const { PORT, MONGO_URI } = config();

  try {
    await connectDB(MONGO_URI);

    if (process.env.NODE_ENV !== 'test') {
      app.listen(PORT, () => {
        consoleMessage.system(`⚡️[server]: Server is running at https://localhost:${PORT}`);
      });
    }

    return app;
  } catch (error) {
    consoleMessage.error(error as string);
    return process.exit(0);
  }
};

export const ExpressApp = bootstrap();
