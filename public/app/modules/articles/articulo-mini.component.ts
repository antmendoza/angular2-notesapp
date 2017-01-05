import { Component, Input } from '@angular/core';
import { IArticulo } from './articulo.model';
import { Router } from '@angular/router';
import { CapitalizePipe } from '../shared/capitalize.pipe';

@Component({
	moduleId: module.id,
	selector : 'articulo-mini',
	templateUrl : 'articulo-mini.template.html',
})
export class ArticuloMiniComponent  {
	@Input()
	articulo:IArticulo ;

	constructor(private _router : Router ) {
		
	}

	public goArticulo(id:number){
		this._router.navigate(['articulo',id]);
	}

}