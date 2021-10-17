import TimestampService from '../TimestampService'

describe('TimestampService', () => {
  describe('#getTimestampByDate', () => {
    describe('timestamp in milliseconds', () => {
      it('returns an object that contains the correct unix in (milliseconds) and utc values - Fri, 25 Dec 2015', () => {
        const date = '1451001600000'

        expect(TimestampService.getTimestampByDate(date)).toEqual({
          unix: 1451001600000,
          utc: 'Fri, 25 Dec 2015 00:00:00 GMT',
        })
      })

      it('returns an object that contains the correct unix in (milliseconds) and utc values - Thu, 07 Aug 1986', () => {
        const date = '523756800000'

        expect(TimestampService.getTimestampByDate(date)).toEqual({
          unix: 523756800000,
          utc: 'Thu, 07 Aug 1986 00:00:00 GMT',
        })
      })
    })

    describe('epoch timestamp (in seconds)', () => {
      it('returns an object that contains the correct unix in (milliseconds) and utc values - Fri, 25 Dec 2015', () => {
        const date = '1451001600'

        expect(TimestampService.getTimestampByDate(date)).toEqual({
          unix: 1451001600000,
          utc: 'Fri, 25 Dec 2015 00:00:00 GMT',
        })
      })

      it('returns an object that contains the correct unix in (milliseconds) and utc values - Thu, 07 Aug 1986', () => {
        const date = '523756800'

        expect(TimestampService.getTimestampByDate(date)).toEqual({
          unix: 523756800000,
          utc: 'Thu, 07 Aug 1986 00:00:00 GMT',
        })
      })
    })

    describe('date string', () => {
      it('converts the correct date string and returns an object that contains the correct unix in (milliseconds) and utc values', () => {
        const date = '2015-12-25'

        expect(TimestampService.getTimestampByDate(date)).toEqual({
          unix: 1451001600000,
          utc: 'Fri, 25 Dec 2015 00:00:00 GMT',
        })
      })

      it('converts the correct date string and returns an object that contains the correct unix in (milliseconds) and utc values', () => {
        const date = '1986-08-07'

        expect(TimestampService.getTimestampByDate(date)).toEqual({
          unix: 523756800000,
          utc: 'Thu, 07 Aug 1986 00:00:00 GMT',
        })
      })
    })
  })
})
