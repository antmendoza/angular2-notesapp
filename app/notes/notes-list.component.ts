import { Component, Input} from '@angular/core';
import { Note, ContainsFilter, PrinterBasicNoteToHtml, } from './note.model';
import { NotesListService } from './notes.service';


@Component({
	selector: 'notes-list',
	template : `
	<div *ngFor="let note of filterNotes()">
	<bookmark [idElement]="note._id"></bookmark>
	<a [routerLink] = "[1]"><h4 class="media-heading">{{note._title}}</h4></a>
	<div [innerHTML]="printer(note)">
	</div> 
	</div>
	`,
	providers: [ NotesListService ]
})

export class NotesListComponent {

    @Input() filter: string = "";
	private notes : Array<Note>;
	private service : NotesListService;
	
	constructor(service : NotesListService){
		this.service = service;
		this.notes = this.service.notes();
	}

	public filterNotes(): Array<Note> {
		return this.notes.concat([]).filter((note: Note)=>  {	
			return note.matchFilter(new ContainsFilter(this.valueSearch()));
		});
	}

	private valueSearch(): string{
		return this.filter.trim();
	}

	public printer(note: Note) : string{
		return new  PrinterBasicNoteToHtml(note).print()+"<hr/>";
	}

}