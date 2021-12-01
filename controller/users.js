const User = require('../models/User');

module.exports = {
  getUsers: (req, resp, next) => {
  },
  getUser: (req, resp, next) => {
    const userId = req.params.id;
    resp.send('No implementado: Obtener usuario por su ID', userId);
  },
  postUser: (req, resp, next) => {
    resp.send('No implementado: crear usuario');
  },
  putUser: (req, resp, next) => {
    resp.send('No implementado: editar usuario');
  },
  deleteUser: (req, resp, next) => {
    resp.send('No implementado: borrar usuario');
  }
};
