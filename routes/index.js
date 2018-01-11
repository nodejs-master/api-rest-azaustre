'use strict'
/* En este fichero tenemos configuradas nuestras rutas, para lo cual estamos 
usando el Router de Express y una llamada a los controladores con productCtrl */

const express = require('express')
const productCtrl = require('../controllers/product')
const auth = require('../middleware/auth')
const api = express.Router()

api.get('/product', productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', productCtrl.saveProduct)
api.put('/product/:productId', productCtrl.updateProduct)
api.delete('/product/:productId', productCtrl.deleteProduct)

api.get('/private', auth.isAuth, function(req, res){
    res.status(200).send({ message: 'Tienes acceso'})
})

module.exports = api