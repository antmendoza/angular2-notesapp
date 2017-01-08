"use strict"

interface ToHtml {
	toHtml(): string;
}

export interface ItemContent extends Filterable, ToHtml {
	readonly value: string;
}

export enum DETAIL_TYPE {
    FULL,
    RESUME
}



export class Paragraph implements ItemContent {
	readonly value: string;
	constructor(value: string) {
		this.value = value;
	}
	toHtml(): string {
		return  this.value ;
	}

	matchFilter(filter: Filter): boolean {
		return filter.match(this.value);
	}
}


export interface Note extends Filterable {
	readonly id: number;
	readonly title: string;
	readonly content: ItemContent;
	readonly dateCreation: Date;
	readonly author: string;

}

export class BasicNote implements Note {

	readonly id: number;
	readonly title: string;
	readonly content: ItemContent;
	readonly dateCreation: Date;
	readonly author: string;

	constructor(id:number, title: string, content: ItemContent,
		dateCreation: Date, author: string) {
		this.id = id;
		this.title = title;
		this.content = content;
		this.dateCreation = dateCreation;
		this.author = author;
	}



	matchFilter(filter: Filter): boolean {
		return filter.match(this.title)
			|| this.content.matchFilter(filter);
	}

}









//////// Filters
export interface Filter {
	match(value: string);
}

export class ContainsFilter implements Filter {
	private sequence: string;
	constructor(sequence: string) {
		this.sequence = sequence;
	}
	match(value: string) {
		return value.toLowerCase().indexOf(this.sequence.toLowerCase()) !== -1;
	}
}

export interface Filterable {
	matchFilter(filter: Filter)
}



