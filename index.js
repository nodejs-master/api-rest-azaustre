'use strict'

/* Este archivo lo unico que hace es pedir todo la informacion, del config y de 
toda la configuracion con Express, se conecta a la BD y una vez conectado enpieza 
a escuchar el servidor de Express */

var mongoose = require('mongoose')
var app = require('./app')
const config = require('./config')

// Conectar a la BD y Arrancar el API
mongoose.connect( config.db, (err, res) => {
    if(err){
        return console.log(` Error al conectar a la BD: ${err}`);
    }
    console.log('Conexión a la Base de Datos Establecida...')

    // Arrancar el API
    app.listen(config.port, () => {
        console.log(`API REST Corriendo en http://localhost:${config.port}`);
    });
})

