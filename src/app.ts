import express, { urlencoded, Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

app.get('/', async (req: Request, res: Response) => {
  res
    .json('PROJECT STARTED ON BROWSWER')
    .send('University-management project on browser')
})
export default app
