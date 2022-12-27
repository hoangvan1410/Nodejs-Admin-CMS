/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable camelcase */
/* eslint-disable prefer-const */
const UsersController = (container) => ({
    createUser: async (req, res) => {
      const { CreateUser } = container
      let created = Date.now();
      const { fullName, email, password} = req.body
      const user = await CreateUser(
        fullName, 
        email, 
        password
      )
  
      res.code(201).send(user)
    }
  
  })
  
  module.exports = UsersController
  