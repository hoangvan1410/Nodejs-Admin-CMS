module.exports = ({ HeartRatesController }) => [
  {
    method: 'GET',
    path: '/heartRates',
    handler: HeartRatesController.listHeartRates
  },
  {
    method: 'GET',
    path: '/heartRates/:id',
    handler: HeartRatesController.findHeartRate
  },
  {
    method: 'POST',
    path: '/heartRates',
    handler: HeartRatesController.createHeartRate
  },
  {
    method: 'GET',
    path: '/heartRates/user=:user_id',
    handler: HeartRatesController.findHeartRateByUserId
  },
  {
    method: 'DELETE',
    path: '/heartRate/:id',
    handler: HeartRatesController.deleteHeartRate
  },
  {
    method: 'DELETE',
    path: '/heartRate/user=:user_id',
    handler: HeartRatesController.deleteHeartRateByUserId
  }
  
]
