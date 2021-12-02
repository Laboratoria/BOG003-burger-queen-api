const User = require('../models/User');

module.exports = {
  getUsers: async (req, resp, next) => {
    const user = await User.find().populate({ path: 'orders', populate: { path: 'orderId' } });
    resp.json(user);
  },
  getUser: async (req, resp, next) => {
    const user = await User.findById(req.params.uid);
    resp.json(user);
  },
  postUser: async (req, resp, next) => {
    const { email, password, roles, orders } = req.body;
    const newUser = new User({
      email,
      password,
      roles,
      orders,
    });
    await newUser.save();
    resp.json({ message: 'User saved' });
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
