import { db } from '../../../../config/firebase'
import { Request, Response } from 'express'

export const addName = async (req: Request, res: Response) => {
  const { name } = req.body
  await db.collection("names").add({ name })
  
  return res.status(202).json()
}