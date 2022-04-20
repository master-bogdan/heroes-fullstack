import { connectDB } from './db/connect';
import { consoleMessage } from './common/utils/console-message';
import { config } from './config/config';
import { app } from './app';

const bootstrap = async () => {
  const { PORT, DB } = config();

  try {
    await connectDB(DB.MONGO_URI);

    app.listen(PORT, () => {
      consoleMessage.system(`⚡️[server]: Server is running at https://localhost:${PORT}`);
    });
  } catch (error) {
    consoleMessage.error(error as string);
    process.exit(1);
  }
};

bootstrap();
