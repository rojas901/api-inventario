const express = require('express');
const router = express.Router();
const {usuariosController} = require('../controllers');

router.get('/', usuariosController.getUsuarios);

router.post('/', usuariosController.createUsuarios);

router.put('/', usuariosController.updateUsuarios);

router.delete('/', usuariosController.deleteUsuarios);

module.exports = router;