const isNumber = (n: string): boolean => {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n)
}

const getTimestampByDate = (dateInput: string) => {
  let dateParam: string | number

  if (isNumber(dateInput)) {
    dateParam = parseInt(dateInput)

    // if the length of the date input is less than or equal to 10 - the epoch is in seconds
    // otherwise in milliseconds
    const date = dateInput.length <= 10 ? new Date(dateParam * 1000) : new Date(dateParam)

    return {
      unix: date.valueOf(),
      utc: date.toUTCString(),
    }
  }

  return dateInput
}

export default {
  getTimestampByDate,
}
