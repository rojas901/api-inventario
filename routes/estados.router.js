const express = require('express');
const router = express.router;

router.get('/', (req, res)=>{
    res.json({msg:'todos los estados'});
});

router.post('/', (req, res)=>{
    res.json({msg:'estado insertado'});
});

router.put('/', (req, res)=>{
    res.json({msg:'estado actualizado'});
});

router.delete('/', (req, res)=>{
    res.json({msg:'estado eliminado'});
});

module.exports = router;