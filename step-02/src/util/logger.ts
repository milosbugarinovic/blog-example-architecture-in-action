// Simple logging utility to log to the console
/* eslint-disable  @typescript-eslint/no-explicit-any */
export const logger = {
	debug(message?: any, ...optionalParams: any[]): void {
		console.debug(message, ...optionalParams) // eslint-disable-line no-console
	},
	error(message?: any, ...optionalParams: any[]): void {
		console.error(message, ...optionalParams) // eslint-disable-line no-console
	},
	info(message?: any, ...optionalParams: any[]): void {
		console.info(message, ...optionalParams) // eslint-disable-line no-console
	},
	log(message?: any, ...optionalParams: any[]): void {
		console.log(message, ...optionalParams) // eslint-disable-line no-console
	},
	warn(message?: any, ...optionalParams: any[]): void {
		console.warn(message, ...optionalParams) // eslint-disable-line no-console
	},
}
/* eslint-enable */
