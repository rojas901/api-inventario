const express = require('express');
const router = express.router;

router.get('/', (req, res)=>{
    res.json({msg:'todos los usuarios'});
});

router.post('/', (req, res)=>{
    res.json({msg:'usuario insertado'});
});

router.put('/', (req, res)=>{
    res.json({msg:'usuario actualizado'});
});

router.delete('/', (req, res)=>{
    res.json({msg:'usuario eliminado'});
});

module.exports = router;