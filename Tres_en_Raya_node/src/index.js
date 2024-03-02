const app = require('./app');  // la instancia de nuestra aplicación


// // Inicialezamos el servidor
// // Con el listen escucha el puerto 
// // la función flecha para revisar que esté bien
app.listen(app.get('port'), () => { 
    console.log('Servidor escuchando por el puerto: ', app.get('port'));
});
