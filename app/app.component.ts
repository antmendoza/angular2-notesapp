import { Component } from '@angular/core';
import { NotesListComponent } from './notes/notes-list.component';
import { Note } from './notes/note.model';



@Component({
    selector: 'my-app',
    template: `<!--div class="container">
                <h1>Notes:</h1>
                <boxfilter (boxFilterEvent)=handleBoxFilterEvent($event)></boxfilter>
				<notes-list [filter]="filterValue()"></notes-list>
    		  </div-->
              <ul>
                <li><a routerLink = "">Home</a>
                <li><a routerLink = "notes">Notes list</a>
                <li><a routerLink = "notes-details">Note detail</a>
              
              <router-outlet></router-outlet>
              `
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

