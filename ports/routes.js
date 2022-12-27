module.exports = ({ HeartRatesController,UserController }) => [
  {
    method: 'POST',
    path: '/heartRates',
    handler: HeartRatesController.createHeartRate
  },
  {
    method: 'POST',
    path: '/lohin',
    handler: UserController.createUser
  }

]
