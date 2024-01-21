import sharedConfig from './jest.config'
import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
	...sharedConfig,
	testPathIgnorePatterns: [...(sharedConfig.testPathIgnorePatterns as string[]), '/__tests__/'],
}

export default jestConfig
