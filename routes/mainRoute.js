const { Router } = require('express');
const mainController = require('../controller/mainController');

const router = Router();

router.get('/', mainController.getMain);

module.exports = router;
