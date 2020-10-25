const mongoose = require('mongoose')


// Campos a serem gravados no banco de dados (login usuario)
const UserSchema = new mongoose.Schema({
    email: String,
})

module.exports = mongoose.model('User', UserSchema)