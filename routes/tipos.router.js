const express = require('express');
const router = express.router;

router.get('/', (req, res)=>{
    res.json({msg:'todos los tipos'});
});

router.post('/', (req, res)=>{
    res.json({msg:'tipo insertado'});
});

router.put('/', (req, res)=>{
    res.json({msg:'tipo actualizado'});
});

router.delete('/', (req, res)=>{
    res.json({msg:'tipo eliminado'});
});

module.exports = router;