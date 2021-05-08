module.exports = () => class {
  constructor (id = null, user_id, heart_rate, state, create_date) {
    this.id = id
    this.user_id = user_id
    this.heart_rate = heart_rate
    this.state = state
    this.create_date = create_date
  }
}
