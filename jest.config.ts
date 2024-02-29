import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  resolver: 'ts-jest-resolver',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  collectCoverage: true,
  collectCoverageFrom: [
    // Ignore src, it only contains a demo. libs are in projects
    'projects/**/*.{js,jsx,ts,tsx}',

    // Ignore Type, Test, and Dependency files
    '!**/*.d.ts',
    '!**/*.spec.ts',
    '!node_modules/**/*',
  ],
  //modulePaths: ['<rootDir>/dist'],
  modulePathIgnorePatterns: ['<rootDir>/dist'],
};

export default config;
