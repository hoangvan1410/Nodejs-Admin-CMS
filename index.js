require('dotenv').config()
require('make-promises-safe')
constexpress = require('express')
const container = require('./infrastructure/config/container')()
const server = require('./infrastructure/webserver/fastify')(container.cradle)
const PORT = process.env.PORT || 5057
const HOST = process.env.HOST || '0.0.0.0'

server.listen(PORT, HOST, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})
