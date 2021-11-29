const Product = require('../models/Product');

module.exports = {
  getProducts: (req, resp, next) => {
    resp.send('No implementado: Obtener lista de productos')

  },
  getProduct: (req, resp, next) => {
    const productId = req.params.id;
    resp.send('No implementado: Obtener producto por su ID' + productId)
  },
  postProduct: (req, resp, next) => {
    resp.send('No implementado: crear producto')
  },
  putProduct: (req, resp, next) => {
    resp.send('No implementado: editar producto')
  },
  deleteProduct: (req, resp, next) => {
    resp.send('No implementado: borrar producto')
  }
};
