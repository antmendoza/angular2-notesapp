var express = require('express');
var bodyParser = require('body-parser');
//var Notes = require('./notes.js');
//var notes = new Notes();
var Articulos = require('./articulos.js');
var articulos = new Articulos();

var server = module.exports = express();

var jsonParser = bodyParser.json();


server.use('/',express.static(__dirname + '/../../public')); 			
server.use('/node_modules',express.static(__dirname + '/../../node_modules')); 

/** 
 * SE ASUME QUE UNA NOTA TENDRÁ, AL MENOS, UN ID NUMÉRICO Y UN TÍTULO ALFANUMÉRICO.
 * NO SE HA ESTABLECIDO COMPROBACIÓN DE ERRORES.
 */

// Routes
//server.get('/notes/search/:titulo', notes.rest_findNotesByTitulo());
//server.get('/notes/:id', notes.rest_findNote() );
//server.put('/notes/',   jsonParser , notes.rest_createNote());
//server.post('/notes/', jsonParser, notes.rest_updateNote());
//server.delete('/notes/:id', notes.rest_removeNote());
//server.get('/notes/', notes.rest_listAllNotes());

server.get('/notes/', articulos.rest_listAllNotes());
server.get('/notes/:id', articulos.rest_findNote() );
server.put('/note',   jsonParser , articulos.rest_createNote());
server.post('/note',   jsonParser , articulos.rest_updateNote());


server.get('/articulos/search/:titulo', articulos.rest_findArticulosByTitulo());
server.get('/articulo/:id', articulos.rest_findArticulo() );
server.put('/articulo/',   jsonParser , articulos.rest_createArticulo());
server.post('/articulo/',   jsonParser , articulos.rest_updateArticulo());
server.delete('/articulo/:id',articulos.rest_removeArticulo());
server.get('/articulos/', articulos.rest_listAllArticulos());





