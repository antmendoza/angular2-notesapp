import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';

import { NotesService } from './notes.service';

@Component({
	selector: 'note-detail',
	template : `
	<div>Note detail {{_id}}</div>
	`,
	providers: [ NotesService ]
})

export class NoteDetailComponent  implements OnInit, OnDestroy{
	private _id: string;
	private _subscription ;
	constructor(private _service: NotesService,  private _route: ActivatedRoute){
	}

	ngOnInit(){
		this._subscription = this._route.params.subscribe(params => {
			this._id = params["id"];
		});
	}
	ngOnDestroy(){
		this._subscription.unsubscribe();
		
	}


}