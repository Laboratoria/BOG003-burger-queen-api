const { Schema, model } = require('mongoose');

const roleSchema = Schema(
  {
    admin: {
      type: Boolean,
      default: false,
    },
  },
);

module.exports = model('Role', roleSchema);
