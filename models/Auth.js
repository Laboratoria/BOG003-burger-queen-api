const { Schema, model } = require('mongoose');

const AuthSchema = new Schema({
  email: String,
  password: String,

});

module.exports = model('Auth', AuthSchema);