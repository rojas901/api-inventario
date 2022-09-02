const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const usuariosModel = require('./usuarios');
const marcasModel = require('./marcas');
const estadosModel = require('./estados');
const tiposModel = require('./tipos');

const inventarioSchema = new Schema({
    serial: String,
    modelo: String,
    descripcion: String,
    fotoEquipo: String,
    color: String,
    fechaCompra: Date,
    precio: Number,
    usuarioCargo: {
        type: Schema.Types.ObjectId,
        ref: usuariosModel,
    },
    marca: {
        type: Schema.Types.ObjectId,
        ref: marcasModel
    },
    estado: {
        type: Schema.Types.ObjectId,
        ref: estadosModel
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: tiposModel
    }
});

module.exports = model('Inventario', inventarioSchema);