const express = require('express');
const respuesta = require('../../red/respuestas');
const controlador = require('./controlador');

const router = express.Router();

router.get('/', obtenerJugadores);
router.get('/consultar/:id', obtenerRegJugador);
router.delete('/eliminar/:id', eliminarRegJugador);
router.post('/', agregarRegJugador);

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

            console.log(req.body);

            if(req.body.cedula == 0){
                  msj = 'Registro agregado con éxito';
            }else{
                  msj = 'Registro actualizado con éxito';
            }

            respuesta.sucess(req, res, items, 201); 
      } catch(err){
            respuesta.error(req, res, 'Error interno del servidor: '+ err, 500);
      }
};

module.exports = router;