import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { NotesListComponent }  from './notes-list.component';
import { NotesListService } from './notes.service';
@NgModule({
  imports:      [ BrowserModule , FormsModule],
  declarations: [ AppComponent, NotesListComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ NotesListService ]
})
export class AppModule { }
