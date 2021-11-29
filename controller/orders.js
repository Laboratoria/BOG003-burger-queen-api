const Order = require('../models/Order');

module.exports = {
  getOrders: (req, resp, next) => {
    resp.send('No implementado: Obtener lista de productos')
  },
  getOrder: (req, resp, next) => {
    const orderId = req.params.id;
    resp.send('No implementado: Obtener orden  por su ID' + orderId)
  },
  postOrder: (req, resp, next) => {
    resp.send('No implementado: crear orden')
  },
  putOrder: (req, resp, next) => {
    resp.send('No implementado: editar orden')
  },
  deleteOrder: (req, resp, next) => {
    resp.send('No implementado: borrar orden')
  }
};