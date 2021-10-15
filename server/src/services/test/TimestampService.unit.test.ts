import TimestampService from '../TimestampService'

describe('TimestampService', () => {
  describe('#conversion', () => {
    it('returns the an object that contains the unix and utc fields', () => {
      const date = '1451001600000'

      expect(TimestampService.conversion(date)).toEqual({
        unix: 1451001600000,
        utc: 'Fri, 25 Dec 2015 00:00:00 GMT',
      })
    })
  })
})
