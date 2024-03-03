jest.mock('#src/util/es-module-util')

import { constant } from '#src/util/constant'

describe('constant', () => {
	it('should return a constant object', () => {
		const constantValue = constant()
		expect(constantValue).toEqual({
			adminEmail: 'john@mail.com',
			adminId: '10000000-1000-1000-1000-100000000000',
			adminPassword: 'password123',
			codeDir: expect.any(String),
			port: 3000,
			projectName: '@architecture-in-action/step',
			projectVersion: '1.0.0',
			rootDir: expect.any(String),
		})
		// expect(constantValue.codeDir.slice(-11)).toEqual('step-01/src')
		// expect(constantValue.rootDir.slice(-7)).toEqual('step-01')
	})
})
