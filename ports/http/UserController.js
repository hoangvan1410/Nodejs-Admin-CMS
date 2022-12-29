/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable camelcase */
/* eslint-disable prefer-const */
const { verifyUser } = require('../middleware/verifyUser')
const UsersController = (container) => ({
  createUser: async (req, res) => {
    const { CreateUser } = container
    let created = Date.now();
    const { fullName, email, password } = req.body
    const user = await CreateUser(
      fullName,
      email,
      password
    )
    res.code(201).send(user)
  },

  login: async (req, res) => {
    const { Login } = container
    const { email, password } = req.body
    console.log(req.body)
    const response = await Login(email,password)
    switch (response.code){
      case 401: res.code(401).send(response)
      default: res.code(200).send(response)
    }
    
    
  }

})

module.exports = UsersController
