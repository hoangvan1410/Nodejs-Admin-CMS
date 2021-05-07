module.exports = ({ HeartRateRepository, HeartRate }) =>
  (user_id, heart_rate , create_date) => {
    const heartRate = new HeartRate(null, user_id, heart_rate, create_date)
    return HeartRateRepository.persist(heartRate)
  }
