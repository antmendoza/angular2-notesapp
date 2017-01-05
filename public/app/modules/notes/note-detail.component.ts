import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { Note, ContainsFilter, DETAIL_TYPE } from './note.model';

import { NotesService } from './notes.service';


@Component({
	moduleId: module.id,
	selector: 'note-detail',
	templateUrl: 'note-detail.component.html',
	providers: [NotesService]
})

export class NoteDetailComponent implements OnInit, OnDestroy {

	@Input() private detailType: DETAIL_TYPE = DETAIL_TYPE.FULL;
	@Input() private note: Note;

	private _subscription;

	constructor(private _service: NotesService, 
				private _route: ActivatedRoute ) {

	}

	ngOnInit() {
		this._subscription = this._route.params.subscribe(params => {
			let paramId = params['id'];
			if (paramId) {
				let id = parseInt(paramId);
				this._service
					.note(id)
					.toPromise()
					.then(note => {
						this.note = note;
					})
					.catch(err => {
							console.error(this.note);
							console.error(err);
								});
			}
		});
	}

	ngOnDestroy() {
		this._subscription.unsubscribe();
	}

	private noteContent(): string {
		if (this.noteInitialized()) {
			return this.note.content.toHtml()
		}
		return "";
	}
	private showLink(): boolean {
		return this.detailType === DETAIL_TYPE.RESUME;
	}

	private showDateCreation(): boolean {
		return this.detailType === DETAIL_TYPE.FULL;
	}

	private showEditButton(): boolean {
		return this.detailType === DETAIL_TYPE.FULL;
	}
	
	private urlEditButton(): string {
		if (this.noteInitialized()) {
			return 'edit';
		}
		return "";
	}

	private notLoggedMessage(): string {
		return "Login to edit this content";
	}


	private noteInitialized(): boolean {
		if (this.note) {
			return true; 
		}
		return false;
	}




}

