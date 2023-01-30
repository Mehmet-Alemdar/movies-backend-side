import express from 'express'
import cors from 'cors'

import '../mongo-connection.js'

import { createUser, signin } from './handlers/user.js'
import { protect } from './modules/auth.js'
import router from './router.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extends: true}))



app.get('/', (req, res, next) => {
  res.send('Hi')
})

app.use('/api', protect, router)

app.post('/signup', createUser)
app.post('/signin', signin)




export default app