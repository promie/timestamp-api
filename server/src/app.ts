import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'

const app: Application = express()

app.use(express.json())
app.use(cors())

export default app
