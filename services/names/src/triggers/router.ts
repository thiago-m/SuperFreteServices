import { Application } from 'express'
import { addName } from '../functions/addName'

export default function(application: Application) {
  application.post('/', addName)
}