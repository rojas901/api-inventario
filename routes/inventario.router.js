const express = require('express');
const router = express.router;

router.get('/', (req, res)=>{
    res.json({msg:'todos los registros'});
});

router.post('/', (req, res)=>{
    res.json({msg:'registro insertado'});
});

router.put('/', (req, res)=>{
    res.json({msg:'registro actualizado'});
});

router.delete('/', (req, res)=>{
    res.json({msg:'registro eliminado'});
});

module.exports = router;