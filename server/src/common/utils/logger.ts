import { loggerDate } from './dates';

export const logger = ({
  error: (message: string) => {
    console.log('\x1b[31m', `[${loggerDate}] - ${message}`);
  },
  system: (message: string) => {
    console.log('\x1b[33m', `[${loggerDate}] - ${message}`);
  },
  log: (message: string) => {
    console.log('\x1b[36m', `[${loggerDate}] - ${message}`);
  },
});
