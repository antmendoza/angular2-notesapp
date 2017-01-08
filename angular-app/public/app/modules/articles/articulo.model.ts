


export interface IArticulo { 
	id:number;
	titulo:string;
	contenido:string;
	comentarios:Array<string>;
	fecha : Date;
	autor:string;
}


export class Articulo implements IArticulo {
	id:number;
	titulo:string;
	contenido:string;
	comentarios:Array<string>;
	fecha:Date;
	autor:string;

	constructor(titulo:string, contenido:string, 
		comentario:Array<string>, fecha:Date, autor:string='', id:number) {
		this.titulo = titulo;
		this.contenido = contenido;
		this.comentarios = comentario;
		this.fecha = fecha;
		this.autor = autor;
		this.id = id;
	}

	public getComentariosCorrectos():Array<string> {
		return this.comentarios.filter( item =>  item !== 'Gili' );
	}
}