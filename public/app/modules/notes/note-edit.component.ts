import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

import { Note, BasicNote, ContainsFilter, Paragraph, DETAIL_TYPE } from './note.model';
import { NotesService } from './notes.service';
import { FormComponent } from './note-form.model';

@Component({
    moduleId: module.id,
    selector: 'note-edit',
    templateUrl: 'note-form.component.html',
    providers: [NotesService]
})
export class NoteEditComponent implements OnInit, OnDestroy, FormComponent{

    private _subscription;
    private note: Note;

    constructor(private _service: NotesService, 
                private _router: Router, 
                private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this._subscription = this._route.params.subscribe(params => {
            let paramId = params['id'];
            let id = parseInt(paramId);
            this._service
                .note(id)
                .toPromise()
                .then(note => {
                    this.note = note;
                })
                .catch(err => console.error(err));

        });
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    nameSubmitForm(): string{
        return "Save";
    }

    
	onSubmit() {
		this._service
            .update(this.note)
			.toPromise()
			.then( result => {
				console.log(result) ;
				this._router.navigate(['/notes']);
			})
			.catch( err => console.error(err) );
	}

    public noteInitialized(): boolean {
		if (this.note) {
			return true; 
		}
		return false;
	}


}