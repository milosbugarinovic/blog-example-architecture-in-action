jest.mock('#src/util/es-module-util')

import { constant } from '#src/util/constant'

describe('constant', () => {
	it('should return a constant object', () => {
		const constantValue = constant()
		expect(constantValue).toEqual({
			adminEmail: 'admin@mail.com',
			adminId: '10000000-2000-3000-4000-500000000000',
			adminPassword: 'pa$$word',
			codeDir: expect.any(String),
			port: 3000,
			projectName: '@architecture-in-action/step-01',
			projectVersion: '1.0.0',
			rootDir: expect.any(String),
		})
		expect(constantValue.codeDir.slice(-11)).toEqual('step-01/src')
		expect(constantValue.rootDir.slice(-7)).toEqual('step-01')
	})
})
