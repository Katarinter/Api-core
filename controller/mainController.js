const usuario = {
  name: 'Jorge GO',
  tlf: '666 777 999',
};
const User = require('../models/usuario');

function getUsuario(req, res) {
  return res.send(usuario);
}
function postUser(req, res) {
  /* Coge el request.body con los atributos introducidos y lo devuelve con el metodo save() */

  /* Global User, req.body */

  const auxuser = new User(req.body);

  auxuser.save((err, newUser) => {
    if (err) return res.status(400).send({ message: 'Error al guardar el usuario', error: err });
    return res.status(200).send(newUser);
  });
}

module.exports = { getUsuario, postUser };
