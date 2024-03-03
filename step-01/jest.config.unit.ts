// @ts-ignore
import sharedConfig from './jest.config'
import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
	...sharedConfig,
	testPathIgnorePatterns: [...(sharedConfig.testPathIgnorePatterns as string[]), '/__tests__/'],

	// clearMocks: true,
	// collectCoverage: false,
	// collectCoverageFrom: ['src/**/*.ts', '!src/index*.ts', '!src/**/*.{contract,d}.ts'],
	// coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/', '/__mocks__/', '/__snapshots__/'],
	// maxConcurrency: 1,
	// moduleNameMapper: {
	// 	'^#package.json$': '<rootDir>/package.json',
	// 	'^#src$': ['<rootDir>/src/index'],
	// 	'^#src/(.*)$': ['<rootDir>/src/$1', '<rootDir>/src/$1/index'],
	// },
	// preset: 'ts-jest',
	// roots: ['<rootDir>'],
	// setupFiles: [],
	// setupFilesAfterEnv: ['jest-extended/all'],
	// testEnvironment: 'node',
	// testMatch: ['<rootDir>/src/**/*.(spec|test).[jt]s?(x)'],
	// testPathIgnorePatterns: ['/node_modules/', '/__tests__/'],
	// testTimeout: 20000,
}

export default jestConfig
