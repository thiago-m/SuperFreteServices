import * as functions from "firebase-functions/v1"
import { db } from "../../../../config/firebase"

export const addIncrementId = functions.firestore.document("/names/{documentId}")
  .onCreate(async (snap: functions.firestore.QueryDocumentSnapshot) => {
    await snap.ref.set({ increment_id: await getNextCounter() }, { merge: true })
})

export const getNextCounter = async () => {
  const counterDocRef = db.collection('total').doc('names')
  let nextNumber = 1

  await db.runTransaction(async (transaction: any) => {
    const counterDoc = await transaction.get(counterDocRef)

    if (!counterDoc.exists) transaction.set(counterDocRef, { counter: nextNumber })
    else {
      const currentCounter = counterDoc.data().counter
      nextNumber = currentCounter + 1
      transaction.update(counterDocRef, { counter: nextNumber })
    }
  })

  return nextNumber
}
