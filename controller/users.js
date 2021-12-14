const User = require('../models/User');
const Role = require('../models/Roles');
const pagination = require('../pagination');


module.exports = {
  getUsers: async (req, resp, next) => {
    const usersList = pagination(req, resp, User, 'users');
    return usersList;
  },
  getUser: async (req, resp, next) => {
    const user = await User.findById(req.params.uid);
    resp.json(user);
  },
  postUser: async (req, resp, next) => {
    const { email, password, roles = {}, orders } = req.body;
    const role = await new Role(roles).save();
    const newUser = new User({
      email,
      password: await User.encryptPassword(password),
      roles: role._id,
      orders,
    });
    const savedUser = await newUser.save();
    return savedUser.populate('roles');
  },
  putUser: async (req, resp, next) => {
    const { email, password, roles, orders } = req.body;
    await User.findByIdAndUpdate(req.params.uid, {
      email,
      password,
      roles,
      orders,
    });
    resp.json({ message: 'User updated' });
  },
  deleteUser: async (req, resp, next) => {
    await User.findByIdAndUpdate(req.params.uid);
    resp.json({ message: 'User deleted' });
  },
};
