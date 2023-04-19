const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser')






const appRoutProduct = require('../src/routes/products/app.products.routes.js')
const appRoutUser = require('./routes/user/app.user.routes')
const {ENV_CONFIG} = require('../src/config/env.config')
const {error} = require('../src/middlewares/error.js')




const app = express();

const PORT = ENV_CONFIG.PORT;
const SECRET_KEY = ENV_CONFIG.SECRET_KEY
const conexionMongoDB = require('./config/db.config');

// middlewares

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser(ENV_CONFIG.SECRET_KEY));
app.use(error)







app.use('/api',appRoutProduct);
app.use('/api',appRoutUser)




const server = app.listen(PORT, ()=>{
    console.log('Conexion exitosa al puerto 8080')
});
