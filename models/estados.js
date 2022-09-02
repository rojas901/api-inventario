const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const estadosSchema = new Schema({
    nombre: String,
    estado: String,
    fechaCreacion: Date,
    fechaActualizacion: Date
});

module.exports = model('Estados', estadosSchema);