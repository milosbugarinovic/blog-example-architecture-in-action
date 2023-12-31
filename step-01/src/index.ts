import { ServiceApp } from '#src/app-boot/service-app'
import { logger } from '#src/util/logger'

// Create a new instance of the service app
const serviceApp = new ServiceApp()

// Start the service app
await serviceApp.start()

// Handle the exit signals. Safely exit the service app
process.on('SIGINT', () => serviceApp.end('SIGINT'))
process.on('SIGQUIT', () => serviceApp.end('SIGQUIT'))
process.on('SIGTERM', () => serviceApp.end('SIGTERM'))

// Handle the uncaught exceptions and unhandled rejections
process.on('uncaughtException', (error) => logger.error('Uncaught Exception', { error }))
process.on('unhandledRejection', (error) => logger.error('Unhandled Rejection', { error }))
