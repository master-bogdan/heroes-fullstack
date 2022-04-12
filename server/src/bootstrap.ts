import { connectDB } from './db/connect';
import { consoleMessage } from './common/utils/console-message';
import { config } from './config/config';
import { app } from './app';

const bootstrap = async () => {
  const { PORT, MONGO_URI, MONGO_URI_TEST } = config();

  try {
    await connectDB(MONGO_URI_TEST);

    app.listen(PORT, () => {
      consoleMessage.system(`⚡️[server]: Server is running at https://localhost:${PORT}`);
    });
  } catch (error) {
    consoleMessage.error(error as string);
    process.exit(0);
  }
};

bootstrap();
