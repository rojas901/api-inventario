const mongoose = require('mongoose');

const conectarBD = async () => {
    await mongoose.connect('mongodb+srv://user:usersofka@micluster.tzz36.mongodb.net/inventario?retryWrites=true&w=majority')
    .then(() => console.log('Base de datos conectada'))
    .catch((error) => {
        console.error(`Error en la base de datos ${error}`);
    });
}

module.exports = conectarBD;


