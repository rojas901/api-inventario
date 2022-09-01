const express = require('express');
const router = express.router;

router.get('/', (req, res)=>{
    res.json({msg:'todos las marcas'});
});

router.post('/', (req, res)=>{
    res.json({msg:'marca insertada'});
});

router.put('/', (req, res)=>{
    res.json({msg:'marca actualizada'});
});

router.delete('/', (req, res)=>{
    res.json({msg:'marca eliminada'});
});

module.exports = router;