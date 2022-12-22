/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable camelcase */
/* eslint-disable prefer-const */
const HeartRatesController = (container) => ({
  createHeartRate: async (req, res) => {
    const { CreateHeartRate } = container
    let create_date = Date.now();
    const { user_id, heart_rate, state } = req.body

    const heartRate = await CreateHeartRate(
      user_id, 
      heart_rate, 
      state, 
      create_date
    )

    res.code(201).send(heartRate)
  }

})

module.exports = HeartRatesController
