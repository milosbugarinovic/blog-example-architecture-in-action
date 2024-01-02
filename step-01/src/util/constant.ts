import packageJson from './../../package.json' assert { type: 'json' }
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const codeDir = path.join(__dirname, '..')
const rootDir = path.join(codeDir, '..')

// this is a collection of constant values used in the app.
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const constant = () => {
	return {
		adminEmail: 'admin@mail.com',
		adminId: '10000000-2000-3000-4000-500000000000',
		adminPassword: 'pa$$word',
		codeDir,
		port: 3000,
		projectName: packageJson.name,
		projectVersion: packageJson.version,
		rootDir,
	} as const
}
