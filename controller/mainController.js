function getMain(req, res) {
  return res.send.json({
    status: 'The API works',
    message: 'Main app route',
  });
}

module.exports = { getMain };
