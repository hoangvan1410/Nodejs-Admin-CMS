/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable comma-spacing */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
const { NotFoundError, AlreadyExistsError } = require('../webserver/errors')

const MONGO_ALREADY_EXISTS = 11000

module.exports = ({ HeartRate, HeartRateSchema }) => ({
  find: async () => await HeartRateSchema.find(),

  persist: async heartRate => {
    let create_date = Date.now();
    const { user_id, heart_rate, state } = heartRate
    const mongooseHeartRate = new HeartRateSchema({
      user_id,
      heart_rate,
      state,
      create_date
    })

    try {
      await mongooseHeartRate.save()
      return new HeartRate(
        mongooseHeartRate.id,
        mongooseHeartRate.user_id,
        mongooseHeartRate.heart_rate,
        mongooseHeartRate.state,
        mongooseHeartRate.create_date
      )
    } catch (err) {
      if (err.code === MONGO_ALREADY_EXISTS) {
        throw new AlreadyExistsError('Adding new heart rate error!')
      }
    }
  },

  getById: async id => {
    const mongooseHeartRate = await HeartRateSchema.findById(id)
    if (!mongooseHeartRate) throw new NotFoundError('User not found')

    return new HeartRate(
      mongooseHeartRate.id,
      mongooseHeartRate.user_id,
      mongooseHeartRate.heart_rate,
      mongooseHeartRate.state,
      mongooseHeartRate.create_date
    )
  },

  getByUserId: async user_id => await HeartRateSchema.find({ user_id: user_id }),

  remove: async (id) => {
    const mongooseHeartRate = await HeartRateSchema.findOneAndDelete({ _id: id })
    if (!mongooseHeartRate) {
      throw new NotFoundError('HeartRate not found')
    }

    return mongooseHeartRate
  },

  removeByUserId: async user_id => {
    const mongooseHeartRate = await HeartRateSchema.deleteMany({ user_id: user_id })
    if (!mongooseHeartRate) {
      throw new NotFoundError('User not found')
    }

    return mongooseHeartRate
  },

  // eslint-disable-next-line key-spacing, object-curly-spacing
  getByUserIdAndDate: async (user_id, from_date, to_date) => await HeartRateSchema.find({ user_id: user_id, create_date:{$gte:from_date,$lte:to_date}}),

})
