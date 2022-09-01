const express = require('express');
const router = express.Router();
const {marcasController} = require('../controllers');

router.get('/', marcasController.getMarcas);

router.post('/', marcasController.createMarcas);

router.put('/', marcasController.updateMarcas);

router.delete('/', marcasController.deleteMarcas);

module.exports = router;