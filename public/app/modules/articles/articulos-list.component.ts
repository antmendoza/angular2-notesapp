import { Component } from '@angular/core';
import { IArticulo, Articulo } from './articulo.model';
import { ArticuloListService } from './articulo-list.service';
import { ArticuloMiniComponent } from './articulo-mini.component';
import { Router } from "@angular/router";


@Component({
	selector: 'articulos-list',
	template : `
			<button type="button" (click)="buscarArticulos()" >Search</button> &nbsp;
			<a [routerLink]="['newArticulo']" style="cursor:pointer">Nuevo artículo</a> 
			<br/>
			<articulo-mini *ngFor="let articulo of articulos_filtrados " [articulo]="articulo"></articulo-mini>
	`,
	providers : [ArticuloListService]
})
export class ArticulosListComponent {
	articulos : Array<IArticulo>;
	articulos_filtrados : Array<IArticulo>;
	search : string;
	articuloListService : ArticuloListService;
	constructor(articuloListService: ArticuloListService, private _router : Router){
		this.search = "";
		this.articuloListService = articuloListService;
		/*
		this.articulos = articuloListService.getArticulos(); 
		this.articulos_filtrados = this.articulos.concat([]);
		*/
		this.articuloListService.getArticulos().subscribe( 
			articulos => {
				console.log('obteniendo aritculos'); console.log(articulos);
				this.articulos = articulos;
				this.articulos_filtrados = this.articulos.concat([]);
			},
			error => console.error(error)
		);
	}

	public buscarArticulos() {
		/* Esto podríamos hacerlo mejor */
		this.articulos_filtrados = this.articulos.filter( (art : Articulo) => (art.contenido.indexOf(this.search) !== -1) ||
				art.titulo.indexOf(this.search) !== -1 )
		
	}



		
}