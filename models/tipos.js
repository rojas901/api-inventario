const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const tiposSchema = new Schema({
    nombre: String,
    estado: String,
    fechaCreacion: Date,
    fechaActualizacion: Date
});

module.exports = model('Tipos', tiposSchema);