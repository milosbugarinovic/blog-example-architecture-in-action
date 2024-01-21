import { objectUtil } from '#src/util/object-util'

describe('objectUtil', () => {
	describe('containsPropertyInObject', () => {
		it.each([
			[true, { a: 1, b: 2 }, { a: 1 }],
			[false, { a: 1, b: 2 }, { a: 2 }],
			[true, { a: 1, b: 2 }, { a: 1, b: 2 }],
			[false, { a: 1, b: 2 }, { a: 1, b: 3 }],
			[false, { a: 1, b: 2 }, { b: 3 }],
			[true, { a: 1, b: 2 }, { b: 2 }],
			[false, { a: 1, b: 2 }, { a: 1, b: 2, c: 3 }],
			[true, { a: 1, b: 2, c: 3 }, { a: 1, b: 2 }],
			[true, { a: 1, b: 2, c: 3 }, { a: 1, c: 3 }],
			[true, { a: 1, b: 2, c: 3 }, { b: 2, c: 3 }],
		])(`%#. should return %p if %p contains all properties from %p`, (expected, obj, props) => {
			expect(objectUtil.containsPropertyInObject({ obj, props })).toBe(expected)
		})
	})
})
