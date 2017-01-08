import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

import { Note, BasicNote, ContainsFilter, Paragraph, DETAIL_TYPE } from './note.model';
import { NotesService } from './notes.service';
import { FormComponent } from './note-form.model';

@Component({
    moduleId: module.id,
    selector: 'note-new',
    templateUrl: 'note-form.component.html',
    providers: [NotesService]
})
export class NoteNewComponent implements OnInit, FormComponent {

    private note;

    constructor(private _service: NotesService,
        private _router: Router,
        private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this.note = this._service.basicNoteFromJSON({
            title: "",
            content: {
                value: ""
            },
            author: ""
        });
    }

    nameSubmitForm(): string {
        return 'Save';
    }


    onSubmit() {
        console.log('creando articulo');
        this.note.dateCreation = new Date();
        this._service
            .new(this.note)
            .toPromise()
            .then(result => {
                console.log('creando con existo... según esto');
                console.log(result);
                this._router.navigate(['/notes']);
            })
            .catch(err => console.error(err));
    }

    public noteInitialized(): boolean {
        if (this.note) {
            return true;
        }
        return false;
    }



}