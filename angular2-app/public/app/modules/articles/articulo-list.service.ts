import { Component, Injectable } from '@angular/core';
import { IArticulo } from './articulo.model';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticuloListService {
    private url_list_articulos = '/articulos/'
    private url_get_articulo = '/articulo/';
    private url_new_articulo = '/articulo';
    private url_update_articulo = "/articulo";

	constructor (private _http : Http) {}

	getArticulos() : Observable<IArticulo[]> {
        return this._http.get(this.url_list_articulos)
            .map( (res : Response) => {
                let articulos = res.json();
                console.log(articulos);
                return articulos || [];
            })
            .catch( (error) => {
                console.error(error);
                return Observable.throw(''+error);
            });
	}

    getArticulo(id:number) : Observable<IArticulo>{
        return this._http.get(this.url_get_articulo+id)
            .map( (res : Response) => {
                let articulo = res.json();
                articulo = articulo || {};
                if (Array.isArray(articulo) && articulo.length>0)
                    articulo = articulo[0];
                console.log(articulo);
                return articulo || {};
            })
            .catch( (error) => {
                console.error(error);
                return Observable.throw(''+error);
            });
    }

    newArticulo(articulo:IArticulo) {
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.put(this.url_new_articulo, articulo, {headers:headers});
    }   

    updateArticulo(articulo:IArticulo) {
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.post(this.url_update_articulo, articulo, { headers: headers} );
    }    

}

