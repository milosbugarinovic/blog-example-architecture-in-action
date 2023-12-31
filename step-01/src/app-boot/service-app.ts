import { ExpressRestApiInit } from '#src/app-boot/init/express-rest-api-init'
import { MemoryDatabaseInit } from '#src/app-boot/init/memory-database-init'
import { logger } from '#src/util/logger'

// Service app definition the order in which the parts are registered and destroyed
export class ServiceApp {
	// Initiable layers
	protected _expressRestAppInit = new ExpressRestApiInit()
	protected _memoryDatabaseInit = new MemoryDatabaseInit()

	// Execute init layers in certain order
	async start(): Promise<void> {
		await this._memoryDatabaseInit.init()
		await this._expressRestAppInit.init()
	}

	// Execute destroy layers in certain order for graceful shutdown
	async end(trigger: string): Promise<void> {
		logger.info(`ServiceApp.end(${trigger})`)
		await this._expressRestAppInit.destroy()
		await this._memoryDatabaseInit.destroy()
	}
}
