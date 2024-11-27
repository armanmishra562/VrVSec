const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roles: [{ type: String, default: 'User' }] // Default role is 'User'
});

module.exports = mongoose.model('User', userSchema);
