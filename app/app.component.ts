import { Component } from '@angular/core';
import { NotesListComponent } from './notes/notes-list.component';
import { Note }  from './notes/note.model';



@Component({
    selector: 'my-app',
    template: `<h1>Notes:</h1>
				<notes-list></notes-list>
    		  `
})
export class AppComponent { }

