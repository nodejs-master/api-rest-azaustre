'use strict'
/* Este archivo app.js tiene la copnfiguracion de Express y una llamada a la s rutas con /api */

const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const api = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', api)

module.exports = app