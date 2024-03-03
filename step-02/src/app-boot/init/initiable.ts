// Simple interface to allow for the init() and destroy() methods which are used in app bootstrap layer (app-boot folder).
export interface Initiable {
	create(): Promise<void>
	destroy(): Promise<void>
}
