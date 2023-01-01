import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'

const KEY = 'fbvtfjnmnygktopbfcgnbtghtfhgtfhgvtf'
export default function (req: NextApiRequest, res: NextApiResponse ) {
	// console.log(req.body)
	if (!req.body){
		res.statusCode = 404 
		res.end('Error')
		return
	}

	const {username ,password} = req.body
	res.json({
		token: jwt.sign({
			username: username === 'user' && password === '12345',
			admin: username === 'admin' && password === '12345'
		},
		KEY)
	})
}