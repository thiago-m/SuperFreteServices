import { getNextCounter } from '../src/functions/addIncrementId'
import { db } from '../../../config/firebase'

describe('test the getNextCounter function in the addIncrementId file in the functions folder', () => {
  it('should return 1 when no counter document exists', async () => {
    const transaction = {
      get: jest.fn().mockResolvedValue({ exists: false }),
      set: jest.fn(),
      update: jest.fn(),
      getAll: jest.fn(),
      create: jest.fn(),
      delete: jest.fn(),
    } as unknown as FirebaseFirestore.Transaction

    db.runTransaction = jest.fn((callback) => callback(transaction))

    const result = await getNextCounter()

    expect(transaction.get).toHaveBeenCalledWith(db.collection('total').doc('names'))
    expect(transaction.set).toHaveBeenCalledWith(db.collection('total').doc('names'), { counter: 1 })
    expect(result).toBe(1)
  })

  it('should increment the counter when a document exists', async () => {
    const transaction = {
      get: jest.fn().mockResolvedValue({ exists: true, data: () => ({ counter: 5 }) }),
      set: jest.fn(),
      update: jest.fn(),
      getAll: jest.fn(),
      create: jest.fn(),
      delete: jest.fn(),
    } as unknown as FirebaseFirestore.Transaction

    db.runTransaction = jest.fn((callback) => callback(transaction))

    const result = await getNextCounter()

    expect(transaction.get).toHaveBeenCalledWith(db.collection('total').doc('names'))
    expect(transaction.update).toHaveBeenCalledWith(db.collection('total').doc('names'), { counter: 6 })
    expect(result).toBe(6)
  })
})
