const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    userid: String,
    password: String,
    role: String,
})

const UserModel = mongoose.model("users", UsersSchema)
module.exports = UserModel