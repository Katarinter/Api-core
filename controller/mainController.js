const User = require('../models/usuario');

function getUsuario(req, res) {
  User.find({}, (err, userData) => {
    if (err) {
      return res.status(400);
    }
    return res.send(userData);

  });
}
function postUser(req, res) {

  const auxUser = new User(req.body);

  auxUser.save((err, newUser) => {
    if (err) return res.status(400).send({ message: 'Error al guardar el usuario', error: err });
    return res.status(200).send(newUser);
  });
}

module.exports = { getUsuario, postUser };
