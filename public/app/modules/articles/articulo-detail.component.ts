
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IArticulo } from './articulo.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticuloListService } from './articulo-list.service';

@Component({
	moduleId: module.id,
	selector : 'articulo-detail',
	templateUrl : 'articulo-detail.component.html',
	providers : [ ArticuloListService ]
})
export class ArticuloDetailComponent implements OnInit, OnDestroy {
	articulo : IArticulo ;
	private id : number;
	private params_sub : any; 

	constructor(
		private _route : ActivatedRoute, //Este Servicio nos permitirá acceder y operar sobre la ruta activa
		private _router : Router, // Este Servicio nos permite navegar
		private _articuloListService : ArticuloListService
	){
	
	}

	ngOnInit() {
		/**
		 * route_params es un objeto Observable. La programación asíncrona reemplea patrones que ya existían
		 * para utilizarlos como nuevas vías de programación asíncrona. En este caso patrones ligados a los 
		 * eventos están siendo muy explotados. 
		 * Uno que está teniendo mucho tirón es el patrón observer, vinculado a otro que contempla
		 * tratar los datos asíncrones como un stream, un flujo.
		 * @param {[type]} params =>  [description]
		 */
		this.params_sub = this._route.params.subscribe( params => {
			this.id  = parseInt(params['id']);
			this.loadArticulo(this.id);
		});
	}

	ngOnDestroy() {
		this.params_sub.unsubscribe();
	}

	loadArticulo(id:number) {		
		return this._articuloListService
			.getArticulo(id)
			.toPromise()
			.then( articulo => { this.articulo = articulo; }  )
			.catch( err => console.error(err) );
		
	}

	actualizarArticulo(articulo):void {
		console.log('ARCTUALIZAR ARTICULO');
		console.log(articulo);

		this._articuloListService.updateArticulo(articulo)
			.toPromise()
			.then( response => console.log(response) )
			.catch( err => console.error(err) );
	}
}