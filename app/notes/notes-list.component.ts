import { Component } from '@angular/core';
import { Note, ContainsFilter, PrinterBasicNoteToHtml, } from './note.model';
import { NotesListService } from './notes.service';

@Component({
	selector: 'notes-list',
	template : `
	<input name="search" [(ngModel)]="search" placeholder="search..." (keyup)="filterNotes()">
	<div *ngFor="let note of filterNotes()">
	<div [innerHTML]="printer(note)">
	</div> 
	</div>
	`
})

export class NotesListComponent {
	private notes : Array<Note>;
	private service : NotesListService;
	public search : string;
	
	constructor(service : NotesListService){
		this.search = "";
		this.service = service;
		this.notes = this.service.notes();
	}

	public filterNotes(): Array<Note> {
		return this.notes.concat([]).filter((note: Note)=>  {	
			return note.matchFilter(new ContainsFilter(this.valueSearch()));
		});
	}

	private valueSearch(): string{
		return this.search.trim();
	}

	public printer(note: Note) : string{
		return new  PrinterBasicNoteToHtml(note).print()+"<hr/>";
	}

}