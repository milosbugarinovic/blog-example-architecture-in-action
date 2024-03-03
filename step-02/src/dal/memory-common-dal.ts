import { objectUtil } from '#src/util/object-util'
import { stringUtil } from '#src/util/string-util'

export class MemoryCommonDal<T extends { id: string }> {
	protected readonly _entities: Record<string, T>

	constructor(params: { entityMemory: Record<string, T> }) {
		const { entityMemory } = params

		this._entities = entityMemory
	}

	findOneById(id: string): T | undefined {
		return this._entities[id]
	}

	findOne(params: { where: Partial<T> }): T {
		const { where } = params
		const [foundEntity] = this.findMany({ where })
		if (!foundEntity) {
			throw new Error('entity not found')
		}

		return foundEntity
	}

	findMany(params?: { where?: Partial<T> }): T[] {
		const { where } = params ?? {}
		if (!where) {
			return Object.values(this._entities)
		}

		return Object.values(this._entities).filter((item) => {
			return objectUtil.containsPropertyInObject({ obj: item, props: where })
		})
	}

	create(params: { data: Partial<T> }): T {
		const { data } = params
		if (!data.id) {
			data.id = stringUtil.generateUuid()
		}
		if (this._entities[data.id]) {
			throw new Error('id already exists')
		}
		this._entities[data.id] = data as T

		return data as T
	}

	edit(params: { id: string; data: Partial<T> }): T {
		const { id, data } = params

		const oldEntity = this._entities[id]
		if (!oldEntity) {
			throw new Error('id does not exist')
		}

		const updatedEntity = { ...oldEntity, ...data, id } as T
		this._entities[id] = updatedEntity

		return updatedEntity
	}

	remove(id: string): void {
		// eslint-disable-next-line @typescript-eslint/no-dynamic-delete
		delete this._entities[id]
	}
}
