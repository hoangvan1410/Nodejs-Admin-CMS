const { asFunction } = require('awilix')

const mongoDB = container => {
  const HeartRateRepositoryMongo = require('../repositories/HeartRateRepositoryMongo')

  // Load Database and Schemas
  container.loadModules([
    'infrastructure/database/**/*.js'
  ])

  container.register({
    HeartRateRepository: asFunction(HeartRateRepositoryMongo)
  })
}

const resolveDB = container => {
  mongoDB(container)
}

module.exports = resolveDB
