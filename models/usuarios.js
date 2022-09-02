const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const usuariosSchema = new Schema({
    nombre: String,
    email: String,
    estado: String,
    fechaCreacion: Date,
    fechaActualizacion: Date
});

module.exports = model('Usuarios', usuariosSchema);