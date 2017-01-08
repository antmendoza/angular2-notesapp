(function(){
"use strict";

    var lokijs = require('lokijs');

    var _ArticuloController = function () {
        var _this = this;
        this.lokifichero = './server/lokidb/db.json';
        this.lokiopciones = {
            autosave: true,
            autosaveInterval: 30,
            autoload: true,
            persistenceAdapter: 'fs',
            autoloadCallback:  () => {
                console.log('Cargando lokiDb...');
                if (!_this.db.getCollection('articulos')) {
                    var articulos = _this.db.addCollection('articulos', { indices: ['titulo'], unique: ['id'] });
                }
                
                if (!_this.db.getCollection('notes')) {
                    var notas = _this.db.addCollection('notes', { indices: ['_title'], unique: ['_id'] });
                }

                console.log('Cargada... o debería :P');
                this.lokiarticulocollection = _this.db.getCollection('articulos');

                this.lokinotecollection = _this.db.getCollection('notes');


                console.log(' - lokifichero: '+this.lokifichero);
                console.log(' - lokiopciones: '+JSON.stringify(this.lokiopciones));

            }
        };
        this.db = new lokijs(this.lokifichero, this.lokiopciones);

       
    };

    _ArticuloController.prototype.listAllArticulos = function(){
        return this.lokiarticulocollection.find();
    };

    _ArticuloController.prototype.findArticulosByTitulo = function(titulo ) {
        return this.lokiarticulocollection.find( { 'titulo' : titulo } );       
    };

    _ArticuloController.prototype.findArticulo = function(id ) {
        return this.lokiarticulocollection.by ( 'id' , id  );
    };

    _ArticuloController.prototype.createArticulo = function(articulo ){
        this.lokiarticulocollection.insert(articulo);
        let _articulo = this.lokiarticulocollection.by('id', articulo.id);
        _articulo.id = _articulo.$loki;
    };

    _ArticuloController.prototype.removeArticulo = function(id ) {
        this.lokiarticulocollection.removeWhere( item => item.id === id );
    };

    _ArticuloController.prototype.updateArticulo = function(articulo ) {
        let auxarticulo = this.findArticulo(articulo.id);
        for(let prop in articulo){
            auxarticulo[prop] = articulo[prop];
        }
    };

    _ArticuloController.prototype.rest_listAllArticulos = function(){ 
        return (req ,res) => {
            res.status(200).json(this.listAllArticulos());
        };
    };

    _ArticuloController.prototype.rest_findArticulosByTitulo = function(){ 
        return (req, res) => {
            res.status(200).json(this.findArticulosByTitulo(req.params.titulo));
        };
    };

    _ArticuloController.prototype.rest_findArticulo = function(){ 
        return (req, res) => {
            res.status(200).json(this.findArticulo(req.params.id));
        };
    };

    _ArticuloController.prototype.rest_createArticulo = function(){ 
        return (req, res) => {
            let nota = req.body;
            nota.id = (new Date()).getTime();
            this.createArticulo(nota);
            res.status(200).json(nota);
        };
    };

    _ArticuloController.prototype.rest_removeArticulo = function(){ 
        return (req, res) => {
            let id = parseInt(req.params.id);
            this.removeArticulo(id);
            res.status(200).end();
        };
    };

    _ArticuloController.prototype.rest_updateArticulo = function(){ 
        return (req, res) => {
            this.updateArticulo(req.body);
            res.status(200).json(req.body)
         }  ; 
    };    

///////

    _ArticuloController.prototype.listAllNotes = function(){
        return this.lokinotecollection.find();
    };

    _ArticuloController.prototype.findNote = function(id ) {
        return this.lokinotecollection.by ( 'id' , id  );
    };

    _ArticuloController.prototype.updateNote = function(note ) {
        let auxnote = this.findNote(note.id);
        for(let prop in note){
            auxnote[prop] = note[prop];
        }
        this.lokinotecollection.update(auxnote);
    };

    _ArticuloController.prototype.findNotesByTitulo = function(titulo ) {
        return this.lokinotecollection.find( { 'titulo' : titulo } );       
    };


    _ArticuloController.prototype.createNote = function(note ){
        this.lokinotecollection.insert(note);
        let _note = this.lokinotecollection.by('id', note.id);
        _note.id = _note.$loki;
    };

    _ArticuloController.prototype.removeNote = function(id ) {
        this.lokinotecollection.removeWhere( item => item.id === id );
    };


    _ArticuloController.prototype.rest_listAllNotes = function(){ 
        return (req ,res) => {
            res.status(200).json(this.listAllNotes());
        };
    };

    _ArticuloController.prototype.rest_findNotesByTitulo = function(){ 
        return (req, res) => {
            res.status(200).json(this.findNotesByTitulo(req.params.titulo));
        };
    };

    _ArticuloController.prototype.rest_findNote = function(){ 
        return (req, res) => {
            res.status(200).json(this.findNote(req.params.id));
        };
    };

    _ArticuloController.prototype.rest_createNote = function(){ 
        return (req, res) => {
            let nota = req.body;
            nota.id = (new Date()).getTime();
            this.createNote(nota);
            res.status(200).json(nota);
        };
    };

    _ArticuloController.prototype.rest_removeNote = function(){ 
        return (req, res) => {
            let id = parseInt(req.params.id);
            this.removeNote(id);
            res.status(200).end();
        };
    };

      _ArticuloController.prototype.rest_updateNote = function(){ 
        return (req, res) => {
            this.updateNote(req.body);
            res.status(200).json(req.body)
         }  ; 
    };    

  



    /////



    module.exports = _ArticuloController  ;

})();