import * as moment from 'moment'

const isNumber = (n: string): boolean => {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n)
}

const conversion = (date: string) => {
  // returned object
  // {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
  // If the date input is blank return an object of the current date and time

  // Check if the input is a number
  if (isNumber(date)) {
    // This is a unix number
    const isValid = moment(parseInt(date)).isValid()

    console.log('isValid', isValid)

    console.log('I AM IN EPOCH NUMBER')
  } else {
    // treat it as a date string
  }

  return date
}

export default {
  conversion,
}
