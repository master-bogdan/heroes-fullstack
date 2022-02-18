import { Express } from 'express';
import * as mongoose from 'mongoose';
import { consoleMessage } from './utils/console-message';

export const bootstrap = async (app: Express) => {
  const PORT = process.env.PORT || 3001;

  try {
    await mongoose.connect(`${process.env.MONGO_URI}`, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      consoleMessage.system(`⚡️[server]: Server is running at https://localhost:${PORT}`);
    });
  } catch (error) {
    consoleMessage.error(error);
  }
};
