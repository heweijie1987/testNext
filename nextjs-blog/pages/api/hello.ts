import { NextApiRequest, NextApiResponse } from 'next'
export default (req:NextApiRequest, res:NextApiResponse) => {
    console.log("---req:",req.query);
    res.status(200).json({ text: 'Hello' })
}