import request from 'supertest'
import httpStatus from 'http-status'
import app from './app'

describe('Timestamp api integration', () => {
  describe('/api/v1/timestamps', () => {
    it('returns the 200 OK when it successfully hits the endpoint', async () => {
      await request(app).get('/api/v1/timestamps').expect(httpStatus.OK)
    })

    it('returns the correct response object with the fields that contains the unix and utc', async () => {
      const response = await request(app).get('/api/v1/timestamps')

      expect(response.body).toHaveProperty('unix')
      expect(response.body).toHaveProperty('utc')
    })
  })

  describe('/api/v1/timestamps/:date', () => {
    it(
      'returns the 200 OK and returns the response object with correct unix and utc time - ' +
        'unix time (in milliseconds as input)',
      async () => {
        const response = await request(app)
          .get('/api/v1/timestamps/1451001600000')
          .expect(httpStatus.OK)

        expect(response.body).toEqual({
          unix: 1451001600000,
          utc: 'Fri, 25 Dec 2015 00:00:00 GMT',
        })
      },
    )

    it(
      'returns the 200 OK and returns the response object with correct unix and utc time - ' +
        'with date string as input',
      async () => {
        const response = await request(app)
          .get('/api/v1/timestamps/1986-08-07')
          .expect(httpStatus.OK)

        expect(response.body).toEqual({
          unix: 523756800000,
          utc: 'Thu, 07 Aug 1986 00:00:00 GMT',
        })
      },
    )

    it('returns the 400 BAD REQUEST if the date input is valid', async () => {
      const response = await request(app)
        .get('/api/v1/timestamps/testing123')
        .expect(httpStatus.BAD_REQUEST)

      expect(response.body).toEqual({
        error: 'Invalid Date',
      })
    })
  })
})
