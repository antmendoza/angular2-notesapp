import { Component, Input} from '@angular/core';
import { Note, ContainsFilter, PrinterBasicNoteToHtml, } from './note.model';
import { NotesService } from './notes.service';


@Component({
	selector: 'notes-list',
	template : `
	<boxfilter (boxFilterEvent)=handleBoxFilterEvent($event)></boxfilter>
	<div *ngFor="let note of filterNotes()">
	<bookmark [idElement]="note._id"></bookmark>
	<a [routerLink] = "[note._id]"><h4 class="media-heading">{{note._id +" "+ note._title}}</h4></a>
	<div [innerHTML]="printer(note)">
	</div> 
	</div>
	`,
	providers: [ NotesService ]
})

export class NotesListComponent {

	private filter: string = "";
	private notes : Array<Note>;
	
	constructor(service : NotesService){
		this.notes = service.notes();
	}

	private filterNotes(): Array<Note> {
		return this.notes.concat([]).filter((note: Note)=>  {	
			return note.matchFilter(new ContainsFilter(this.valueSearch()));
		});
	}

	private valueSearch(): string{
		return this.filter.trim();
	}

	private printer(note: Note) : string{
		return new  PrinterBasicNoteToHtml(note).print()+"<hr/>";
	}

 	private handleBoxFilterEvent($event){
        this.filter = $event.value;
    }


}