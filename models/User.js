const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: String,
  password: String,
  roles: {
    type: Object,
    optional: true,
    admin: Boolean,
  },
});

module.exports = model('Product', userSchema);