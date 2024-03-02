const express = require('express');
const respuesta = require('../../red/respuestas');
const controlador = require('./controlador');

const router = express.Router();

router.get('/', obtenerJugadores);
router.get('/consultar/:id', obtenerRegJugador);
router.delete('/eliminar/:id', eliminarRegJugador);
router.post('/crear/', agregarRegJugador);
router.put('/actualizar/', actualizarRegJugador);

async function obtenerJugadores(req,res){
      try{ 
            const items = await controlador.obtenerJugadores();
            respuesta.sucess(req, res, items, 200);
      } catch(err){
            respuesta.error(req, res, 'Error interno del servidor: '+ err, 500);
      }
};

async function obtenerRegJugador(req,res){
      try{ 
            const items = await controlador.obtenerRegJugador(req.params.id);
            respuesta.sucess(req, res, items, 200);
      } catch(err){
            respuesta.error(req, res, 'Error interno del servidor: '+ err, 500);
      }
};

async function eliminarRegJugador(req,res){
      try{ 
            const items = await controlador.eliminarRegJugador(req.params.id);
            respuesta.sucess(req, res, 'Registro eliminado con éxito', 200); //'Registro eliminado con éxito'
      } catch(err){
            respuesta.error(req, res, 'Error interno del servidor: '+ err, 500);
      }
};

async function agregarRegJugador(req,res){
      try{ 
            const items = await controlador.agregarRegJugador(req.body);
            respuesta.sucess(req, res, 'Registro agregado con éxito', 201); 
      } catch(err){
            respuesta.error(req, res, 'Error interno del servidor: '+ err, 500);
      }
};

async function actualizarRegJugador(req,res){

      const existe = await controlador.obtenerRegJugador(req.body.cedula);
      
      if(existe == ''){
            respuesta.sucess(req, res, 'Registro no existe', 201);
      }else{
            try{  
                  const items = await controlador.actualizarRegJugador(req.body);
                  respuesta.sucess(req, res, 'Registro actualizado con éxito', 201); //'Registro actualizado con éxito'
            } catch(err){
                  respuesta.error(req, res, 'Error interno del servidor: '+ err, 500);
            }
      }
};

module.exports = router;