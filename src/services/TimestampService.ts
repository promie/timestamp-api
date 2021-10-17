import { isNumber } from '../helpers'
import { ITimestamp } from '../types/timestamp'

const getTimestampByDate = (dateInput: string): ITimestamp => {
  let dateParam: string | number
  let date: Date

  if (isNumber(dateInput)) {
    dateParam = parseInt(dateInput)

    // if the length of the date input is less than or equal to 10 - the epoch is in seconds
    // otherwise in milliseconds
    date =
      dateInput.length <= 10 ? new Date(dateParam * 1000) : new Date(dateParam)

    return {
      unix: date.valueOf(),
      utc: date.toUTCString(),
    }
  }

  date = new Date(dateInput)

  if (date.toString() === 'Invalid Date') {
    return {
      error: 'Invalid Date',
    }
  }

  return {
    unix: date.valueOf(),
    utc: date.toUTCString(),
  }
}

export default {
  getTimestampByDate,
}
