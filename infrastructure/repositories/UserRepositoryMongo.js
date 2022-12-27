const { NotFoundError, AlreadyExistsError } = require('../webserver/errors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const MONGO_ALREADY_EXISTS = 11000

module.exports = ({ User, UserSchema }) => ({
    find: async () => await HeartRateSchema.find(),
    persist: async newUser => {
        const { fullName, email, password, created } = newUser
        console.log("======================",newUser)
        hash_password = bcrypt.hashSync(password, 10);
       
        const mongooseUser = new UserSchema({
            fullName,
            email,
            hash_password,
            created
        })
        try {
            await mongooseUser.save()
            return new User(
                mongooseHeartRate.fullName,
                mongooseHeartRate.email,
                mongooseHeartRate.hash_password,
                mongooseHeartRate.created
            )
        } catch (err) {
            if (err.code === MONGO_ALREADY_EXISTS) {
                throw new AlreadyExistsError('')
            }
        }
    }
})