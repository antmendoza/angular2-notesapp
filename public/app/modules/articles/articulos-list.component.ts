import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { IArticulo, Articulo } from './articulo.model';
import { ArticuloListService } from './articulo-list.service';
import { ArticuloMiniComponent } from './articulo-mini.component';
import { Router } from "@angular/router";
import { SearchService } from '../shared/services/search/search.service';


@Component({
	selector: 'articulos-list',
	template: `
			<articulo-mini *ngFor="let articulo of articulos_filtrados " 
								[articulo]="articulo">
			</articulo-mini>
	`,
	providers: [ArticuloListService]
})
export class ArticulosListComponent implements OnInit, OnDestroy{
	private articulos: Array<IArticulo>;
	private articulos_filtrados: Array<IArticulo>;
	private search: string;
	private _subscriptionSearch;

	constructor(private articuloListService: ArticuloListService, 
				private _router: Router,
				private _searchService: SearchService) {
		this.search = "";
		this.articuloListService = articuloListService;
	
	}

	ngOnInit(){
		this.articuloListService.getArticulos().subscribe(
			articulos => {
				console.log('obteniendo artículos'); console.log(articulos);
				this.articulos = articulos;
				this.articulos_filtrados = this.articulos.concat([]);
			},
			error => console.error(error)
		);

		this._subscriptionSearch = this._searchService.searchTerm().subscribe(
			term => {
				this.search = term;
				
				this.articulos_filtrados = this.articulos.filter((art: Articulo) => (art.contenido.indexOf(this.search) !== -1) ||
					art.titulo.indexOf(this.search) !== -1)
			},
			error => console.error(error)
		);

	}

	ngOnDestroy(){
		this._subscriptionSearch.unsubscribe();
	}




}