import { Request, Response, NextFunction } from 'express'
import { TimestampService } from '../services'
import httpStatus from 'http-status'
import { ITimestamp } from '../types/timestamp'

/**
 *  Returning the current timestamp
 *
 * @param {object} req
 * @param {object} res
 * @param {function} _next
 * @returns ITimestamp[]
 */
const getCurrentTimestamp = (
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const currentTimestamp = TimestampService.getCurrentTimestamp()

  return res.status(httpStatus.OK).json(currentTimestamp)
}

export default {
  getCurrentTimestamp,
}
