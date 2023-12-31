import { NextFunction, Request, Response } from 'express'

import { constant } from '#src/util/constant'

// Health check, returns OK if the server is running, also return some information about the project, version, neme.
export const getHealthCheck = {
	handler: (_req: Request, res: Response, next: NextFunction) => {
		const { projectVersion, projectName } = constant()
		const result = { name: projectName, status: 'OK', v: projectVersion }

		res.json(result)
		next()
	},
}
