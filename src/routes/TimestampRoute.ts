import express from 'express'
import { TimestampController } from '../controllers'

const router = express.Router()

router.get('/', TimestampController.getCurrentTimestamp)

export default router
