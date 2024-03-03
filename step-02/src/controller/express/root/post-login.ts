import { NextFunction, Request, Response } from 'express'

import { UserRepo } from '#src/business/repo/user-repo'

export const postLogin = {
	handler: (req: Request, res: Response, next: NextFunction) => {
		const { email, password } = req.body

		const [foundUser] = new UserRepo().findMany({ where: { email, password } })
		if (!foundUser) {
			return next(new Error('User not found'))
		}
		res.json(foundUser)
		next()
	},
}
