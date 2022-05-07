import { connectDB } from './db/connect';
import { logger } from './common/utils/logger';
import { config } from './config/config';
import { app } from './app';

const bootstrap = async () => {
  const { PORT, DB } = config();

  try {
    await connectDB(DB.MONGO_URI);

    app.listen(PORT, () => {
      logger.system(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    logger.error(error as string);
    process.exit(1);
  }
};

bootstrap();
