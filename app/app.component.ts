import { Component } from '@angular/core';
import { NotesListComponent } from './notes/notes-list.component';
import { Note } from './notes/note.model';



@Component({
    selector: 'my-app',
    template: `<div class="container">
                <h1>Notes:</h1>
				<notes-list></notes-list>
    		  </div>`
})
export class AppComponent { }

