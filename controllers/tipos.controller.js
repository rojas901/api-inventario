const tiposModel = require('../models/tipos');

const getTipos = (req, res) => {
    res.status(200).json({message: 'Todos los tipos'});
}

const createTipos = (req, res) => { 
    
}

const updateTipos = (req, res) => {
    
 }

const deleteTipos = (req, res) => { 
    
}

module.exports = {
    getTipos,
    createTipos,
    updateTipos,
    deleteTipos
}