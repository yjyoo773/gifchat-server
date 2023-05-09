const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String },
    nickname: { type: String },
    favorites: [], // favorite chat room
    friends: [],
    created: { type: Date },
})

const Users = mongoose.model('User', userSchema);

module.exports = Users;