const { asFunction } = require('awilix')

const mongoDB = container => {
  const HeartRateRepositoryMongo = require('../repositories/HeartRateRepositoryMongo')
  const UserRepositoryMongo = require('../repositories/UserRepositoryMongo')
  // Load Database and Schemas
  container.loadModules([
    'infrastructure/database/**/*.js'
  ])

  container.register({
    HeartRateRepository: asFunction(HeartRateRepositoryMongo),
    UserRepository: asFunction(UserRepositoryMongo)
  })
}

const resolveDB = container => {
  mongoDB(container)
}

module.exports = resolveDB
