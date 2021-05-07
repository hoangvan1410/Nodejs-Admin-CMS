const { RESOLVER } = require('awilix')
const { Schema } = require('mongoose')

const heartRateSchema = new Schema({
  id_user: String,
  heart_rate: Number,
  state: String,
  birthdate: Date,
  create_date: Date
})

const heartRateModel = ({ database: mongoose }) => mongoose.model('HeartRate', heartRateSchema)
module.exports = heartRateModel

heartRateModel[RESOLVER] = {
  name: 'HeartRateSchema'
}