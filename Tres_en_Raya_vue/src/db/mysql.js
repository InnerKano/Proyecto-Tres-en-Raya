const mysql = require('mysql');
const config = require('../config');

// Archivo de configuración de MySQL
const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    passwd: config.mysql.passwd,
    database: config.mysql.database
};

var conexion;

function conectarBD(){
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err) => {
        if (err){ 
            console.log("Error en la conexión a la BD: " + err.message); 
            setTimeout(conectarBD, 200);
        } else { 
            console.log("Conexión exitosa a la BD"); 
        }
    });

    conexion.on('error', (err) => {
        console.log( "Se ha perdido la conexión a MySQL: " + err.message);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            conectarBD();
        } else {
            throw err; // Algo está mal con la BD
        }
    });
}

// Iniciamos conexión
conectarBD();

// Traer datos de la tabla
function obtenerDatos(tabla){
    return new Promise ((resolve, reject) =>{
        conexion.query(`SELECT * FROM ${tabla}`, (err, result) => {
            return !err ? resolve(result) : reject(console.log(`Algo salió mal al realizar la consulta: ${err}`));
        });
    });
}

// Traer un registro
function obtenerRegistro(tabla, id){
    return new Promise ((resolve, reject) =>{
        conexion.query(`SELECT * FROM ${tabla} WHERE cedula = ${id}`, (err, result) => {
            return !err ? resolve(result) : reject(console.log(`Algo salió mal al realizar la consulta: ${err}`));
        });
    });
}

// Agrega un registro
function agregarRegistro(tabla, data){
    return new Promise ((resolve, reject) =>{
        conexion.query(`INSERT INTO ${tabla} SET ?`, data, (err, result) => {
            return !err ? resolve(result) : reject(console.log(`Algo salió mal al realizar la consulta: ${err}`));
        });
    });
}

// Actualizar un registro
function actualizarRegistro(tabla, data){
     
    return new Promise ((resolve, reject) =>{
        conexion.query(`UPDATE ${tabla} SET ? WHERE cedula = ?`, [data, data.cedula], (err, result) => {
            return !err ? resolve(result) : reject(console.log(`Algo salió mal al realizar la consulta: ${err}`));
        });
    });
}

// Elimina  un registro
function eliminarRegistro(tabla, id){
    return new Promise ((resolve, reject) =>{
        conexion.query(`DELETE FROM ${tabla} WHERE cedula = ${id}`, (err, result) => {
            return !err ? resolve(result) : reject(console.log(`Algo salió mal al realizar la consulta: ${err}`));
        });
    });
}

module.exports = {
    obtenerDatos,
    obtenerRegistro,
    agregarRegistro,
    actualizarRegistro,
    eliminarRegistro,
}