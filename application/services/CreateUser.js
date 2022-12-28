/* eslint-disable camelcase */
module.exports = ({ UserRepository, User }) =>
  (fullName, email, password, created) => {
    const user = new User(null, fullName, email, password, created)
    return UserRepository.persist(user)
  }
