const isNumber = (n: string): boolean => {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n)
}

export default { isNumber }
