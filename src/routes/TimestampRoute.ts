import express from 'express'
import { TimestampController } from '../controllers'

const router = express.Router()

router.route('/').get(TimestampController.getCurrentTimestamp)
router.route('/:date').get(TimestampController.getTimestampByDate)

export default router
