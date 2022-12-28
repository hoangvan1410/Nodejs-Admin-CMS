module.exports = ({ HeartRatesController,UserController }) => [
  {
    method: 'POST',
    path: '/heartRates',
    handler: HeartRatesController.createHeartRate
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
