const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
  userId: String,
  client: String,
  products: [{
    productId: String,
    qty: Number,
  }],
  status: {
    type: String,
    enum: ['pending', 'delivering', 'delivered', 'canceled'],
    default: 'pending',
  },
  dateEntry: Date,
});

module.exports = model('Order', OrderSchema);
