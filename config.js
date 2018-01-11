/* Este archivo tiene la configuracion de el puerto y la conexion con la BD */

module.exports = {
    port: process.env.PORT || 3001,
    db: process.env.MONGODB || 'mongodb://localhost:27017/shop',
    secret: api_rest
}