const db = require('../../db/mysql');

const TABLA = 'jugadores';

function obtenerJugadores(){
    return db.obtenerDatos(TABLA);
}

function obtenerRegJugador(id){
    return db.obtenerRegistro(TABLA, id);
}

function eliminarRegJugador(id){
    return db.eliminarRegistro(TABLA, id);
}

function agregarRegJugador(data){
    return db.agregarRegistro(TABLA, data);
}

function actualizarRegJugador(data){
    return db.actualizarRegistro(TABLA, data);
}


module.exports = {
    obtenerJugadores,
    obtenerRegJugador,
    eliminarRegJugador,
    agregarRegJugador,
    actualizarRegJugador,
}