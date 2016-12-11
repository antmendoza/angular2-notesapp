import { Component } from '@angular/core';
import { NotesModule } from './notes/notes.module';



@Component({
    selector: 'my-app',
    template: `<!--div class="container">
                <h1>Notes:</h1>
				<notes-list [filter]="filterValue()"></notes-list>
    		  </div-->
              <ul>
                <li><a [routerLink] = "['']">Home</a>
                <li><a [routerLink] = "['/notes']">Notes list</a>
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

