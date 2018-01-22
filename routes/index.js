'use strict'
/* En este fichero tenemos configuradas nuestras rutas, para lo cual estamos 
usando el Router de Express y una llamada a los controladores con productCtrl */

const express = require('express')
const productCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')
const auth = require('../middleware/auth')
const api = express.Router()

/* Rutas del proyecto desde master*/

api.get('/product', productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', productCtrl.saveProduct)
api.put('/product/:productId', productCtrl.updateProduct)
api.delete('/product/:productId', productCtrl.deleteProduct)

api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)

api.get('/private', auth, (req, res)=>{
    res.status(200).send({ message: 'Tienes acceso'})
})

module.exports = api