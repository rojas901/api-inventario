const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const marcasSchema = new Schema({
    nombre: String,
    estado: String,
    fechaCreacion: Date,
    fechaActualizacion: Date
});

module.exports = model('Marcas', marcasSchema);