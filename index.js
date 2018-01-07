'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rutas
app.get('/api/product', (req, res) =>{
    res.status(200).send({products: []});
});

app.get('/api/product/:productId', (req, res) => {

});

app.post('/api/product', (req, res) => {
    console.log(req.body);
    res.status(200).send({ mensaje: 'El producto se creo satisfactoriamente'});
});

app.put('/api/product/productId', (req, res) => {

});

app.delete('/api/product/productId', (req, res) => {

});

// Conectar a la BD y Arrancar el API
mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if(err){
        return console.log(` Error al conectar a la BD: ${err}`);
    }
    console.log('Conexión a la Base de Datos Establecida...')

    // Arrancar el API
    app.listen(port, () => {
        console.log(`API REST Corriendo en http://localhost:${port}`);
    });
})

