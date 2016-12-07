import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';
import { Note, ContainsFilter, PrinterBasicNoteToHtml, } from './note.model';

import { NotesService } from './notes.service';

@Component({
	selector: 'note-detail',
	template : `
	<div>Note detail {{_note._id}}</div>
	<div [innerHTML]="printer(_note)">
	`,
	providers: [ NotesService ]
})

export class NoteDetailComponent  implements OnInit, OnDestroy{
	private _note: Note;
	private _subscription ;
	constructor(private _service: NotesService,  private _route: ActivatedRoute){
	}

	ngOnInit(){
		this._subscription = this._route.params.subscribe(params => {
			this._note = this._service.note(params["id"]);
		});
	}
	ngOnDestroy(){
		this._subscription.unsubscribe();
		
	}

	private printer(note: Note) : string{
		return new  PrinterBasicNoteToHtml(note).print()+"<hr/>";
	}


}