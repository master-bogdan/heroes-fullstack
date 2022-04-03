import { loggerDate } from './dates';

export const consoleMessage = ({
  error: (message: string) => {
    console.log('\x1b[31m', `[${loggerDate}] - ${message}`);
  },
  system: (message: string) => {
    console.log('\x1b[33m', `[${loggerDate}] - ${message}`);
  },
  logger: (message: string) => {
    console.log('\x1b[36m', `[${loggerDate}] - ${message}`);
  },
});
