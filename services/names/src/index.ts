import * as functions from "firebase-functions/v1";
import { app } from '../../../config/express'
import router from "./triggers/router";
import firebaseTrigger from './triggers/firestore'

router(app)

exports.api = functions.https.onRequest(app)
exports.firebaseTrigger = firebaseTrigger
