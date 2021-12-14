const jwt = require('jsonwebtoken');
const config = require('../config');
const { postUser } = require('./users');
const { secret } = config;
const User = require('../models/User');
const Role = require('../models/Roles');

module.exports = {
  postAuth: async (req, resp) => {
    const savedUser = await postUser(req, resp);
    const token = jwt.sign({ id: savedUser._id }, secret, {
      expiresIn: 86400,
    });
    resp.json({ token });
  },

};
