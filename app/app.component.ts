import { Component } from '@angular/core';
import { NotesListComponent } from './notes/notes-list.component';
import { Note } from './notes/note.model';



@Component({
    selector: 'my-app',
    template: `<div class="container">
                <h1>Notes:</h1>
                <boxfilter (boxFilterEvent)=handleBoxFilterEvent($event)></boxfilter>
				<notes-list [filter]="filterValue()"></notes-list>
    		  </div>`
})
export class AppComponent {
    filter: string = "";

    filterValue(){
        return this.filter;
    }

    handleBoxFilterEvent($event){
        this.filter = $event.value;
    }

}

