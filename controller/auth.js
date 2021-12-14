const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');
const Roles = require('../models/Roles');
const { postUser } = require('./users');
const { secret } = config;

module.exports = {
  postAuth: async (req, resp) => {
    const savedUser = await postUser(req, resp);
    const token = jwt.sign({ id: savedUser._id }, secret, {
      expiresIn: 86400,
    });
    console.log('ste es el token', token);
    resp.json({ token });
  },

};
