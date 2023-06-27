const express = require('express')
const routes = require('./routes')

const server = express()
const port = process.env.PORT || 3000

server.use(express.json())
server.use('/api', routes)

server.listen(port, () => {
  console.log('Listening on port', port)
})
