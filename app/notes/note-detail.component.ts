import { Component} from '@angular/core';
import { NotesListService } from './notes.service';

@Component({
	selector: 'note-detail',
	template : `
	<div>Note detail</div>
	`,
	providers: [ NotesListService ]
})

export class NoteDetailComponent {


}