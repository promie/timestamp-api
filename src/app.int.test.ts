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
})
