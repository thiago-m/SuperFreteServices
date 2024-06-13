import firebaseFunctionsTest from 'firebase-functions-test'
import { addIncrementId } from '../src/functions/addIncrementId'

let testEnv = firebaseFunctionsTest({ projectId: 'qwesadwcavawsdawe' })

jest.mock('../src/functions/addIncrementId', () => ({
  ...jest.requireActual('../src/functions/addIncrementId'), 
}))

describe('test in addIncrementId file function', () => {
  test('should add a increment_id ti the database', async () => {
    const fakeData = { name: 'Name Test' }
    const mockSet = jest.fn().mockResolvedValue(true)
    const snap = testEnv.firestore.makeDocumentSnapshot(fakeData, 'names/123')
    snap.ref.set = mockSet

    const wrapped = testEnv.wrap(addIncrementId)
    await wrapped(snap)

    expect(mockSet).toHaveBeenCalledWith(
      expect.objectContaining({ increment_id: expect.any(Number) }), { merge: true }
    )
  })
})