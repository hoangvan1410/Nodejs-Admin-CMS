module.exports = () => class {
    constructor (code, error, data) {
      this.code = code
      this.error = error
      this.data = data
    }
  }