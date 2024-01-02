export const objectUtil = {
	containsPropertyInObject: (params: { obj: Record<string, unknown>; props: Record<string, unknown> }): boolean => {
		const { obj, props } = params

		return !!Object.entries(props).find(([key, value]) => {
			return obj[key] === value
		})
	},
}
