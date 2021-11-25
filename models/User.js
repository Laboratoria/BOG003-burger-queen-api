const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: String,
  password: String,
  roles: {
    admin: Boolean,
  },
});

module.exports = model('User', userSchema);
