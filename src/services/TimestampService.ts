const isNumber = (n: string): boolean => {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n)
}

const getTimestampByDate = (dateInput: string) => {
  let dateParam: string | number

  if (isNumber(dateInput)) {
    dateParam = parseInt(dateInput)

    const date = new Date(dateParam)

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
