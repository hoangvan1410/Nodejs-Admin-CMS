module.exports = () => class {
  constructor (id = null, userId, heartRate, state, createDate) {
    this.id = id
    this.user_id = userId
    this.heart_rate = heartRate
    this.state = state
    this.create_date = createDate
  }
}
