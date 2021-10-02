const prueba = {
  status: 'The API works',
  message: 'Main app route',
};

function getMain(req, res) {
  return res.send(prueba);
}

module.exports = { getMain };
