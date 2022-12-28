module.exports = ({ UserRepository }) => (email,password) => UserRepository.login(email,password)
