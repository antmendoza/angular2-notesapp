import { NgModule }      from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { Router, RouterModule } from '@angular/router';

import { NoteDetailComponent }  from './note-detail.component'; 
import { NotesListComponent }  from './notes-list.component'; 

import { BookMarkModule } from '../bookmark/bookmark.module';
import { BoxFilterModule } from '../boxfilter/boxfilter.module';


@NgModule({ 
    imports: [BrowserModule, RouterModule, BookMarkModule , BoxFilterModule], 
    declarations: [NoteDetailComponent, NotesListComponent ], 
    exports: [NoteDetailComponent, NotesListComponent] 
}) 

export class NotesModule { }