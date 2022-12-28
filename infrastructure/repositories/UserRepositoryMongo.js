const { NotFoundError, AlreadyExistsError } = require('../webserver/errors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const MONGO_ALREADY_EXISTS = 11000

module.exports = ({ User, UserSchema, ApiResponse }) => ({
    find: async () => await UserSchema.find(),
    persist: async newUser => {
        const { fullName, email, password, created } = newUser
        console.log("======================", newUser)
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
    },
    comparePassword : function (password,hash_password) {
        return bcrypt.compareSync(password, hash_password);
    },
    login: async (email, password) => {
        const user = await UserSchema.findOne({email: email})
        if (!user) {
            return new ApiResponse(401,"Authentication failed. User not found.","");
        } else if (user) {
            if (!bcrypt.compareSync(password,user.hash_password)) {
                return new ApiResponse(401,"Authentication failed. Wrong password.","");
            } else {
                return new ApiResponse (200,"", "Token: " +jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id}, 'RESTFULAPIs'));
            }
        }
    }
})