import { createRequire } from 'node:module'
import path from 'path'

import { esModuleUtil } from '#src/util/es-module-util'

const dirName = esModuleUtil.dirname()

const cjsRequire = createRequire(dirName)
const packageJson = cjsRequire('#package.json')

const codeDir = path.join(dirName, '..')
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
