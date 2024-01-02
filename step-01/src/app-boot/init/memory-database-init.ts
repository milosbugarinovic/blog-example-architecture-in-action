import { Initiable } from '#src/app-boot/init/initiable'
import { UserRepo } from '#src/business/repo/user-repo'
import { constant } from '#src/util/constant'
import { logger } from '#src/util/logger'

// Application initiable layer for Memory Database. Here we have two functions init and destroy.
// This layer is used to create mocked database which will help me easier explain the concept of the article.
// Because this is memory database we don't need to implement destroy function. If this was a real database
// we would need to disconnect from the database in destroy function, so we could gracefully shut down the app.
export class MemoryDatabaseInit implements Initiable {
	async init(): Promise<void> {
		logger.info('MemoryDatabaseInit.init()')
		this._seedUsers()
	}

	async destroy(): Promise<void> {
		logger.info('MemoryDatabaseInit.destroy()')
	}

	protected _seedUsers(): void {
		const userRepo = new UserRepo()
		const { adminId, adminEmail, adminPassword } = constant()
		userRepo.create({ data: { email: adminEmail, id: adminId, password: adminPassword } })
	}
}
