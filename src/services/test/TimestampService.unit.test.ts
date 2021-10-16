import TimestampService from '../TimestampService'

describe('TimestampService', () => {
  describe('#getTimestampByDate', () => {
    it(
      'returns an object that contains the correct the unix and utc values ' +
        'if a correct unix time is passed in',
      () => {
        const date = '1451001600000'

        expect(TimestampService.getTimestampByDate(date)).toEqual({
          unix: 1451001600000,
          utc: 'Fri, 25 Dec 2015 00:00:00 GMT',
        })
      },
    )
  })
})
