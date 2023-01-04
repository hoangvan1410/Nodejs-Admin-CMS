const verifyToken = require('./middleware/verifyToken')
const fastify = require('fastify')
module.exports = ({ HeartRatesController,UserController }) => [
  {
    method: 'POST',
    path: '/heartRates',
    handler: (HeartRatesController.createHeartRate)
  },
  {
    method: 'POST',
    path: '/register',
    handler: UserController.createUser
  },
  {
    method: 'POST',
    path: '/login',
    handler: UserController.login
  }

]
