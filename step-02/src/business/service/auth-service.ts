import { UserRepo } from '#src/business/repo/user-repo'
import jwt from 'jsonwebtoken'

export const authService = {
	login: (email: string, password: string): string => {
		const user = new UserRepo().findOne({ where: { email } })

		if (user.password !== password) {
			throw new Error('Invalid password')
		}

		return jwt.sign(user)
	},
}
