const Order = require('../models/Order');
const User = require('../models/User');

module.exports = {
  getOrders: async (req, resp) => {
    // const { products } = req.body;
    const orders = await Order.find().populate({ path: 'products', populate: { path: 'productId' } });
    resp.json(orders);
  },
  getOrder: async (req, resp) => {
    const order = await Order.findById(req.params.orderId);
    resp.json(order);
  },
  postOrder: async (req, resp) => {
    const { userId, client, products, status, dateEntry } = req.body;
    const product = { productId: req.body.products.productId, qty: req.body.products.qty };
    Order.findOneAndUpdate({ _id: req.params.orderId }, { $push: { products: product } });
    const user = await User.findById(userId);
    const newOrder = new Order({
      userId: user._id,
      client,
      products,
      status,
      dateEntry,
    });
    const savedOrder = await newOrder.save();
    user.orders = user.orders.concat(savedOrder._id);
    await user.save();
    resp.json({ message: 'Order saved', order: savedOrder });
  },
  putOrder: async (req, resp) => {
    const { status } = req.body;
    await Order.findByIdAndUpdate(req.params.orderId, {
      status,
    });
    resp.json({ message: 'Order updated' });
  },
  deleteOrder: async (req, resp) => {
    await Order.findByIdAndDelete(req.params.orderId);
    resp.json({ message: 'Order deleted' });
  },
};
