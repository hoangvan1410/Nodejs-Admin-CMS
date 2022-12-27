module.exports = () => class {
    constructor (id = null, fullName, email, password, created) {
      this.id = id
      this.fullName = fullName
      this.email = email
      this.password = password
      this.created = created
    }
  }
  