import { dirname } from 'path'
import { fileURLToPath } from 'url'

export const esModuleUtil = {
	dirname: () => {
		return dirname(fileURLToPath(import.meta.url))
	},
}
