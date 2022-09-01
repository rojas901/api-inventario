const express = require('express');
const router = express.Router();
const {estadosController} = require('../controllers');

router.get('/', estadosController.getEstados);

router.post('/', estadosController.createEstados);

router.put('/', estadosController.updateEstados);

router.delete('/', estadosController.deleteEstados);

module.exports = router;