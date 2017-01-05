
import { Router, ActivatedRoute } from "@angular/router";
import { Http, Response , Jsonp } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { IArticulo } from "./articulo.model";
import { ArticuloListService } from "./articulo-list.service";
import { Component } from "@angular/core";

@Component({
	moduleId: module.id,
	selector : "form-new-articulo",
	templateUrl : "articulo-form.component.html",
	providers : [ ArticuloListService ],
})
export class ArticuloFormComponent {
	articulo : IArticulo;

	constructor(private _articuloListService : ArticuloListService , private _router : Router) {
		this.articulo = {
			id:0,
			contenido : '',
			titulo : '',
			comentarios:[],
			fecha:new Date(),	
			autor:''
		};
	}

	onCreateArticulo() {
		console.log('creando articulo');
		this._articuloListService
			.newArticulo(this.articulo)
			.toPromise()
			.then( result => {
				console.log('creando con existo... según esto');
				console.log(result) ;
				this._router.navigate(['/']);
			})
			.catch( err => console.error(err) );
	}
}
