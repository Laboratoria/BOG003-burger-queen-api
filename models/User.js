const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: String,
  password: String,
  roles: {
    admin: Boolean,
  },
  orders: Array,
});

module.exports = model('User', userSchema);
