const express = require('express');
const router = express.Router();
const {tiposController} = require('../controllers');

router.get('/', tiposController.getTipos);

router.post('/', tiposController.createTipos);

router.put('/', tiposController.updateTipos);

router.delete('/', tiposController.deleteTipos);

module.exports = router;