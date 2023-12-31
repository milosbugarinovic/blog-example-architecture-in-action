import bodyParser from 'body-parser'
import cors from 'cors'
import express, { Express, NextFunction, Request, Response } from 'express'
import { Server, createServer } from 'http'

import { Initiable } from '#src/app-boot/init/initiable'
import { expressRouter } from '#src/controller/express/router'
import { constant } from '#src/util/constant'
import { logger } from '#src/util/logger'

// Application initiable layer for Express Rest API. Here we have two functions init and destroy.
// Reading the functions under the init function should explain what is happening here.
// The same goes for the destroy function.
export class ExpressRestApiInit implements Initiable {
	protected readonly _expressApp: Express
	protected readonly _server: Server

	constructor() {
		this._expressApp = express()
		this._expressApp.set('port', constant().port)
		this._server = createServer(this._expressApp)
	}

	async init(): Promise<void> {
		logger.info('ExpressRestApiInit.init()')
		this._logAllRequestsComingToExpress()
		this._setupExpressMiddleware()
		this._registerExpressRoutes()
		this._registerExpressListener()
	}

	async destroy(): Promise<void> {
		logger.info('ExpressRestApiInit.destroy()')
		this._closeExpressListener()
	}

	protected _registerExpressRoutes(): void {
		this._expressApp.use(expressRouter.registerRoutes())
	}

	protected _setupExpressMiddleware(): void {
		this._expressApp.use(cors())
		this._expressApp.use(bodyParser.urlencoded({ extended: false }))
		this._expressApp.use(bodyParser.json())
	}

	protected _logAllRequestsComingToExpress(): void {
		this._expressApp.use((req: Request, _res: Response, next: NextFunction): void => {
			logger.log(`${req.method} ${req.url}`, { restApi: { method: req.method, url: req.url } })

			return next()
		})
	}

	protected _registerExpressListener(): void {
		this._server.listen(this._expressApp.get('port'), () =>
			logger.info(`${constant().projectName}(${constant().projectVersion}) is listening on ${this._expressApp.get('port')}`, {
				restApi: { running: true },
			})
		)
	}

	protected _closeExpressListener(): void {
		this._server.close()
	}
}
