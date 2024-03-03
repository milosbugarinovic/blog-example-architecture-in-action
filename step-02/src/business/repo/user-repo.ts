import { UserModel } from '#src/business/mode/user-model'
import { MemoryCommonDal } from '#src/dal/memory-common-dal'

const ENTITY_MEMORY_USER_MODEL = {} as Record<string, UserModel>

export class UserRepo {
	protected readonly _dal: MemoryCommonDal<UserModel> = new MemoryCommonDal<UserModel>({ entityMemory: ENTITY_MEMORY_USER_MODEL })

	create(params: { data: Omit<UserModel, 'id'> & Partial<Pick<UserModel, 'id'>> }): UserModel {
		const { data } = params

		return this._dal.create({ data })
	}

	findOne(params: { where: Partial<UserModel> }): UserModel {
		return this._dal.findOne(params)
	}

	findOneById(params: { id: string }): UserModel | undefined {
		return this._dal.findOneById(params.id)
	}

	findMany(params?: { where?: Partial<UserModel> }): UserModel[] {
		return this._dal.findMany(params)
	}

	edit(params: { id: string; data: Partial<UserModel> }): UserModel {
		const { id, data } = params

		return this._dal.edit({ data, id })
	}
}
