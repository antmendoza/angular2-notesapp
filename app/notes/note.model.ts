"use strict"



interface ToHtml{
	toHtml():string;
}



export interface ItemContent extends Filterable, ToHtml{
}

export class ImageSport implements ItemContent{
	private value: string; 
	constructor(numImage : number){
		if(numImage > 10){
			numImage = numImage - 10;
		}
		this.value = "http://lorempixel.com/100/100/sports/"+numImage+"/";
	}
	toHtml():string{
		return "<img src='"+this.value+"' />";
	}

	matchFilter(filter: Filter): boolean{
		return false;
	}

}


export class Paragraph implements ItemContent{
	private value: string; 
	constructor( value: string ){
		this.value = value;
	}
	toHtml():string{
		return "<p>"+this.value+"</p>";
	}

	matchFilter(filter: Filter): boolean{
		return filter.match(this.value) ;
	}
}

export class Link implements ItemContent{
	private value: string; 
	private text: string; 
	constructor( value: string, text: string ){
		this.value = value;
		this.text = text;
	}
	toHtml():string{
		return "<a href = '"+this.value+"'> "+this.text+"</a>";
	}

	matchFilter(filter: Filter): boolean{
		return filter.match(this.text) ;
	}
}

export interface Content extends Filterable, ToHtml{

}

export class NoteContent implements Content{
	private elements: Array<ItemContent>;
	constructor( elements: Array<ItemContent> ){
		this.elements = elements;
	}
	toHtml():string{
		let cont = "";
		for (let element of this.elements) {
			cont += element.toHtml();
		}
		return cont;
	}

	matchFilter(filter: Filter): boolean{
		for (let element of this.elements) {
			if(element.matchFilter(filter)){
				return true;
			}
		}
		return false;
	}
}







export interface Note extends Filterable {
	readonly _title: string;
	readonly _content: Content;
	readonly _dateCreation: Date;
	readonly _author: string;

}

export class BasicNote implements Note {

	readonly _title: string;
	readonly _content: Content;
	readonly _dateCreation: Date;
	readonly _author: string;

	constructor(title: string, content: Content, 
						dateCreation: Date, author: string){
		this._title = title;
		this._content = content; 
		this._dateCreation = dateCreation;
		this._author = author;
	}

	

	matchFilter(filter: Filter): boolean{
		return filter.match(this._title) 
				|| this._content.matchFilter(filter);
	}

}



export interface Printable{
	print():string;
}


export class PrinterBasicNoteToHtml implements Printable{

	private note: Note;

	constructor(note: Note){
		this.note = note;
	}

	print():string{
		let content = '<article>' +
		'<header><h4>' + this.note._title + '</h4></header>' +
		'	<small><div>Creation date: ' + this.note._dateCreation.toUTCString() +"</div></small>"+
		'	<small><div>Author: '+ this.note._author + '</div></small>' +
		'	<p>' + this.note._content.toHtml()+ '</p>' +
		'</article>';
		return content; 
	}
}






//////// Filters
export interface Filter{
	match(value : string);
}

export class ContainsFilter implements Filter{
	private sequence : string; 
	constructor( sequence: string ){
		this.sequence = sequence;
	}
	match(value : string){
		return value.toLowerCase().indexOf(this.sequence.toLowerCase()) !== -1; 
	}
}

export interface Filterable{
	matchFilter(filter: Filter)
}



