import moment from 'moment'

const isNumber = (n: string): boolean => {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n)
}

const conversion = (date: string) => {
  if (isNumber(date)) {
    const unixTime = parseInt(date)

    const isValid = moment(unixTime).isValid()

    if(isValid) {
      return {
        unix: unixTime,
        utc: `${moment.utc(unixTime).format('ddd, DD MMM YYYY HH:mm:ss')} GMT`
      }
    }
  } else {
    // treat it as a date string
  }

  return date
}

export default {
  conversion,
}
