//dependencias
const express= require('express');
const mongoose = require('mongoose');
const { dbConnection } = require('./db/config');
const routes = require('./routes');


//crear el servidor
const app= express();
//conectar a mongodb
//habilitar el body-parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));
dbConnection();
//habilitar routing
app.use('/',routes())
//puerto y arrancar el servidor
app.listen(4000,()=>{
    console.log('Servidor funcionando')
})