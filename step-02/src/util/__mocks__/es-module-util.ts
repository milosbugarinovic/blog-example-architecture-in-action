import path from 'path'

export const esModuleUtil = {
	dirname: jest.fn(() => {
		return path.join(__dirname, '..')
	}),
}
