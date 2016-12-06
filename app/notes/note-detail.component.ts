import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';

import { NotesListService } from './notes.service';

@Component({
	selector: 'note-detail',
	template : `
	<div>Note detail {{_id}}</div>
	`,
	providers: [ NotesListService ]
})

export class NoteDetailComponent  implements OnInit, OnDestroy{
	private _id: string;
	private _subscription ;
	constructor(private _route: ActivatedRoute){
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