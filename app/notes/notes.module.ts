import { NgModule }      from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { NoteDetailComponent }  from './note-detail.component'; 
import { NotesListComponent }  from './notes-list.component'; 


import { BookMarkModule } from '../bookmark/bookmark.module';

@NgModule({ 
    imports: [BrowserModule, BookMarkModule], 
    declarations: [NoteDetailComponent, NotesListComponent], 
    exports: [NoteDetailComponent, NotesListComponent] 
}) 

export class NotesModule { }