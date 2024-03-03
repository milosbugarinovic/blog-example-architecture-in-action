import { Router } from 'express'

import { getHealthCheck } from '#src/controller/express/root/get-health-check'
import { postLogin } from '#src/controller/express/root/post-login'

// Register all routes here, so they are visible in one place
export const expressRouter = {
	registerRoutes: (): Router => {
		const router = Router()

		// ROUTE /
		router.get('/', getHealthCheck.handler)
		router.post('/login', postLogin.handler)

		return router
	},
}
