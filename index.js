import * as dotent from 'dotenv'
dotent.config()

import app from './src/server.js'

const PORT = process.env.PORT || '5000'

app.listen('5000', () => {
  console.log(`hello on http://localhost:${PORT}`);
})