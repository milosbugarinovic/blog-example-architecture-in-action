import { stringUtil } from '#src/util/string-util'

describe('stringUtil', () => {
	describe('generateUuid', () => {
		it('should return a uuid', () => {
			const uuidRegex = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i
			const uuid = stringUtil.generateUuid()
			expect(uuid).toMatch(uuidRegex)
		})
	})
})
