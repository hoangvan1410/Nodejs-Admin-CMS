require('dotenv').config()
require('make-promises-safe')

const container = require('./infrastructure/config/container')()
const server = require('./infrastructure/webserver/fastify')(container.cradle)
const PORT = process.env.PORT || 5055
var HOST = process.env.HOST || '0.0.0.0'
server.listen(PORT, HOST, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})