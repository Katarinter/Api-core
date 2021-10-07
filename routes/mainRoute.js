const { Router } = require('express');
const mainController = require('../controller/mainController');

const router = Router();

router.get('/', mainController.getUsuario);

router.post('/', mainController.postUser);

module.exports = router;
