import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';
import { Note, ContainsFilter, PrinterBasicNoteToHtml, } from './note.model';

import { NotesService } from './notes.service';

@Component({
	selector: 'note-detail',
	template : `
	<div>{{note._id +" "+ note._title}}</div>
	<div [innerHTML]="printer(note)"></div> 
	`,
	providers: [ NotesService ]
})

export class NoteDetailComponent  implements OnInit, OnDestroy{
	 note: Note;
	private _subscription ;
	constructor(private _service: NotesService,  private _route: ActivatedRoute){
	}

	ngOnInit(){
		this._subscription = this._route.params.subscribe(params => {
			let idNote = parseInt(params["id"]);			
			this.note = this._service.note(idNote);
		});
	}
	ngOnDestroy(){
		this._subscription.unsubscribe();
		
	}

	private printer(note: Note) : string{
		return new  PrinterBasicNoteToHtml(note).print()+"<hr/>";
	}


}