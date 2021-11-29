const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
  userId : String,
  client: String,
  products: [{
    productId: String,
    qty: Number,
  }],
});

module.exports = model('Order', OrderSchema);