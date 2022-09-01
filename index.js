const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => { 
    res.status(200).send('<h1>La API funciona correctamente</h1>');
});

app.listen(port, ()=>{
    console.log(`Escuchando en el puerto http://localhost:${port}`);
});