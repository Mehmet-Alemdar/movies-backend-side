import express from 'express'
import cors from 'cors'

import '../mongo-connection.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res, next) => {
  res.send('Hi')
})

export default app