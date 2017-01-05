

import { Component, Input , Output, EventEmitter } from "@angular/core";
import { IArticulo } from "./articulo.model";
import { ArticuloListService } from "./articulo-list.service";


@Component({
	moduleId: module.id,
	selector : 'comentario-form',
	providers : [ ArticuloListService ],
	templateUrl : "comentario-form.template.html"
})
export class ComentarioFormComponent {

	@Input()
	articulo : IArticulo;

	@Output()
	articuloChange : EventEmitter<any> = new EventEmitter();

	comentario : string;

	constructor (private _articuloListService : ArticuloListService){}

	onSubmitComentario():void {
		this.articulo.comentarios.push(this.comentario);		
		this.comentario = "";
		this.articuloChange.emit(this.articulo);
	}

}
