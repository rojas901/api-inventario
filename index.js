const express = require('express');
const app = express();
const routes = require('./routes');
const morgan = require('morgan');
const conectarBD = require('./config/db')

const port = 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => { 
    res.status(200).send('<h1>La API funciona correctamente</h1>');
});

app.use('/tipos', routes.tiposRoutes);
app.use('/estados', routes.estadosRoutes);
app.use('/usuarios', routes.usuariosRoutes);
app.use('/marcas', routes.marcasRoutes);
app.use('/inventario', routes.inventarioRoutes);

app.listen(port, ()=>{
    console.log(`Escuchando en el puerto http://localhost:${port}`);
    conectarBD();
});