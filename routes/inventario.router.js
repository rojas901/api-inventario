const express = require('express');
const router = express.Router();
const {inventarioController} = require('../controllers');

router.get('/', inventarioController.getInventario);

router.post('/', inventarioController.createInventario);

router.put('/', inventarioController.updateInventario);

router.delete('/', inventarioController.deleteInventario);

module.exports = router;