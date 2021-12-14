const { Schema, model } = require('mongoose');

const bcrypt = require('bcrypt');

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'El email es obligatorio'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria'],
  },
  roles: {
    ref: 'Role',
    type: Schema.Types.ObjectId,
  },
  orders: Array,
});

userSchema.statics.encryptPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const newPass = await bcrypt.hash(password, salt);
    return newPass;
  } catch (err) {
    console.log('En el modelo del usuario', err);
  }
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  const isEqual = await bcrypt.compare(password, receivedPassword);
  return isEqual;
};

module.exports = model('User', userSchema);
