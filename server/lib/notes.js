(function(){
"use strict";

    var lokijs = require('lokijs');

    var _NoteController = function () {
        var _this = this;
        this.lokifichero = './server/lokidb/db.json';
        this.lokiopciones = {
            autosave: true,
            autosaveInterval: 30,
            autoload: true,
            persistenceAdapter: 'fs',
            autoloadCallback:  () => {
                console.log('Cargando lokiDb...');
                if (!_this.db.getCollection('notes')) {
                    var notas = _this.db.addCollection('notes', { indices: ['_title'], unique: ['_id'] });
                }
                
                console.log('Cargada... o debería :P');
                this.lokinotecollection = _this.db.getCollection('notes');

                console.log(' - lokifichero: '+this.lokifichero);
                console.log(' - lokiopciones: '+JSON.stringify(this.lokiopciones));

            }
        };
        this.db = new lokijs(this.lokifichero, this.lokiopciones);

       
    };

    _NoteController.prototype.listAllNotes = function(){
        return this.lokinotecollection.find();
    };

    _NoteController.prototype.findNotesByTitulo = function(titulo ) {
        return this.lokinotecollection.find( { 'titulo' : titulo } );       
    };

    _NoteController.prototype.findNote = function(id ) {
        return this.lokinotecollection.by ( 'id' , id  );
    };

    _NoteController.prototype.createNote = function(note ){
        this.lokinotecollection.insert(note);
        let _note = this.lokinotecollection.by('id', note.id);
        _note.id = _note.$loki;
    };

    _NoteController.prototype.removeNote = function(id ) {
        this.lokinotecollection.removeWhere( item => item.id === id );
    };

    _NoteController.prototype.updateNote = function(note ) {
        let auxnote = this.findNote(note.id);
        for(let prop in note){
            auxnote[prop] = note[prop];
        }
    };

    _NoteController.prototype.rest_listAllNotes = function(){ 
        return (req ,res) => {
            res.status(200).json(this.listAllNotes());
        };
    };

    _NoteController.prototype.rest_findNotesByTitulo = function(){ 
        return (req, res) => {
            res.status(200).json(this.findNotesByTitulo(req.params.titulo));
        };
    };

    _NoteController.prototype.rest_findNote = function(){ 
        return (req, res) => {
            res.status(200).json(this.findNote(req.params.id));
        };
    };

    _NoteController.prototype.rest_createNote = function(){ 
        return (req, res) => {
            let nota = req.body;
            nota.id = (new Date()).getTime();
            this.createNote(nota);
            res.status(200).json(nota);
        };
    };

    _NoteController.prototype.rest_removeNote = function(){ 
        return (req, res) => {
            let id = parseInt(req.params.id);
            this.removeNote(id);
            res.status(200).end();
        };
    };

    _NoteController.prototype.rest_updateNote = function(){ 
        return (req, res) => {
            this.updateNote(req.body);
            res.status(200).json(req.body)
         }  ; 
    };    


    module.exports = _NoteController  ;

})();