module.exports = ({ HeartRatesController }) => [
  {
    method: 'POST',
    path: '/heartRates',
    handler: HeartRatesController.createHeartRate
  }
]
