import { Request, Response } from 'express'
import { addName } from '../src/functions/addName'
import { db } from '../../../config/firebase'

describe('tests in addName file function', () => {
  test('should add a name to the database and return 202 status', async () => {
    const req = { body: { name: 'John Doe' } } as Partial<Request>

    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as Partial<Response>

    const addMock = jest.fn().mockResolvedValue({})
    db.collection = jest.fn().mockReturnValue({ add: addMock })

    await addName(req as Request, res as Response)

    expect(db.collection).toHaveBeenCalledWith('names')
    expect(addMock).toHaveBeenCalledWith({ name: 'John Doe' })
    expect(res.status).toHaveBeenCalledWith(202)
    expect(res.json).toHaveBeenCalled()
  })
})