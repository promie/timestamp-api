import TimestampService from '../TimestampService'

describe('TimestampService', () => {
  describe('#getTimestampByDate', () => {
    describe('timestamp in milliseconds', () => {
      it('returns an object that contains the correct unix and utc values - Fri, 25 Dec 2015', () => {
        const date = '1451001600000'

        expect(TimestampService.getTimestampByDate(date)).toEqual({
          unix: 1451001600000,
          utc: 'Fri, 25 Dec 2015 00:00:00 GMT',
        })
      })

      it('returns an object that contains the correct unix and utc values - Thu, 07 Aug 1986', () => {
        const date = '523756800000'

        expect(TimestampService.getTimestampByDate(date)).toEqual({
          unix: 523756800000,
          utc: 'Thu, 07 Aug 1986 00:00:00 GMT',
        })
      })
    })

    describe('epoch timestamp', () => {
      it('returns an object that contains the correct unix and utc values - Fri, 25 Dec 2015', () => {
        const date = '1451001600'

        expect(TimestampService.getTimestampByDate(date)).toEqual({
          unix: 1451001600000,
          utc: 'Fri, 25 Dec 2015 00:00:00 GMT',
        })
      })
    })
  })
})
