const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');

const { secret } = config;

module.exports = (secret) => (req, resp, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next();
  }
  const [type, token] = authorization.split(' ');
  if (type.toLowerCase() !== 'bearer') {
    return next();
  }
  const decoded = jwt.verify(token, secret);
  req.uid = decoded.id;
  jwt.verify(token, secret, async (err, decodedToken) => {
    if (err) {
      return next(403);
    }
    const user = await User.findById(decodedToken.id);
    if (user) {
      return next();
    }
  });
};

module.exports.isAuthenticated = (req) => {
  const { authorization } = req.headers;
  const [type, token] = authorization.split('');
  return (type.toLowerCase() !== 'bearer' && token.length > 0);
};

module.exports.isAdmin = async (req) => {
  const user = await User.findById(req.uid);
  return user.roles.admin;
};

module.exports.requireAuth = (req, resp, next) => (
  (!module.exports.isAuthenticated(req))
    ? next(401)
    : next()
);

module.exports.requireAdmin = (req, resp, next) => (
  // eslint-disable-next-line no-nested-ternary
  (!module.exports.isAuthenticated(req))
    ? next(401)
    : (!module.exports.isAdmin(req, secret))
      ? next(403)
      : next()
);
