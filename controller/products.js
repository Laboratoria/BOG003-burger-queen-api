const Product = require('../models/Product');
const pagination = require('../pagination');

module.exports = {
  getProducts: async (req, resp) => {
    const productsList = pagination(req, resp, Product, 'products');
    return productsList;
  },
  getProduct: async (req, resp) => {
    const product = await Product.findById(req.params.productId);
    resp.json(product);
  },
  postProduct: async (req, resp) => {
    const { name, price, imagen, type, dateEntry } = req.body;
    const newProduct = new Product({
      name,
      price,
      imagen,
      type,
      dateEntry,
    });
    await newProduct.save();
    resp.json({ message: 'Product saved' });
  },
  putProduct: async (req, resp) => {
    const { name, price, imagen, type, dateEntry } = req.body;
    await Product.findByIdAndUpdate(req.params.productId, {
      name,
      price,
      imagen,
      type,
      dateEntry,
    });
    resp.json({ message: 'Product Updated' });
  },
  deleteProduct: async (req, resp) => {
    await Product.findByIdAndDelete(req.params.productId);
    resp.json({ message: 'Product deleted' });
  },
};
