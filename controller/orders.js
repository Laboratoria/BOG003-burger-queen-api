const Order = require('../models/Order');

module.exports = {
  getOrders: async (req, resp) => {
    const orders = await Order.find();
    resp.json(orders);
  },
  getOrder: async (req, resp) => {
    const order = await Order.findById(req.params.orderId);
    resp.json(order);
  },
  postOrder: (req, resp) => {
    resp.send('No implementado: crear orden');
  },
  putOrder: (req, resp) => {
    resp.send('No implementado: editar orden');
  },
  deleteOrder: (req, resp) => {
    resp.send('No implementado: borrar orden');
  }
};