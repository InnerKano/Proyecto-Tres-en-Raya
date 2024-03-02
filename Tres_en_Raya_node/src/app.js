const express = require('express');
const config = require('./config');
const cors = require('cors');
const afiliacion = require('./modulos/afiliacion/rutas');
const app = express();

// Middleware
app.use(express.json()); // Se utiliza para poder recibir y enviar JSON en las peticiones
app.use(express.urlencoded({ extended: true })); // true: utiliza la biblioteca "qs" para analizar 
                                                 // los datos codificados en URL. Esta puede manejar 
                                                 // objetos y arrays anidados. Con false usa la 
                                                 // "querystring" que no los soporta. Solo puede 
                                                 // manejar pares de clave-valor planos.
app.use(cors()); // Habilita CORS

// Configuración
app.set('port', config.app.port);

// Rutas
app.use('/api/afiliacion', afiliacion);

module.exports = app;
