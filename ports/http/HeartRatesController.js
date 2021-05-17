const pick = require('lodash/fp/pick')
const GetHeartRateByIdAndDate = require('../../application/GetHeartRateByIdAndDate')

const HeartRatesController = (container) => ({
  listHeartRates: async (req, res) => {
    const { ListHeartRates } = container

    const heartRates = await ListHeartRates()
    return heartRates
  },

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
  },

  findHeartRate: async (req, res) => {
    const { GetHeartRateById } = container

    const heartRate = await GetHeartRateById(req.params.id)
    return heartRate
  },

  findHeartRateByUserId: async (req, res) => {
    const { GetHeartRateByUserId } = container

    const heartRate = await GetHeartRateByUserId(req.params.user_id)
    return heartRate
  },

  deleteHeartRate: async (req, res) => {
    const { DeleteHeartRate } = container

    const heartRate = await DeleteHeartRate(req.params.id)
    return heartRate
  },

  deleteHeartRateByUserId: async (req, res) => {
    const { DeleteHeartRateByUserId } = container

    const heartRate = await DeleteHeartRateByUserId(req.params.user_id)
    return heartRate
  },

  findHeartRateByUserIdAndDate: async(req,res)=>{
    const{GetHeartRateByIdAndDate}=container

    const heartRate = await GetHeartRateByIdAndDate(req.params.user_id,req.params.from_date,req.params.to_date)
    return heartRate
  }
  
})

module.exports = HeartRatesController
