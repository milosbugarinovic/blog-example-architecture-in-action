import { NextFunction, Request, Response } from 'express'

// Post request used to log in into the app. This is the request that we will be using for the example in the article.
export const postLogin = {
	handler: (req: Request, res: Response, next: NextFunction) => {
		const { email, password } = req.body

		res.json({ req: { email, password } })
		next()
	},
}
