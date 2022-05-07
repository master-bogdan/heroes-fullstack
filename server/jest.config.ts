import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  rootDir: './tests',
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  clearMocks: true,
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: [
    '**/*.spec.ts',
    '**/*.test.ts',
  ],
};

export default config;
