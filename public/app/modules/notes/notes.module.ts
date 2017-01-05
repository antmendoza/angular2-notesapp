import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NoteDetailComponent } from './note-detail.component';
import { NotesListComponent } from './notes-list.component';
import { NoteEditComponent } from './note-edit.component';
import { NoteNewComponent } from './note-new.component';

import { AuthModule } from '../../auth/auth.module';


import { BookMarkModule } from '../bookmark/bookmark.module';


@NgModule({
    imports: [BrowserModule, RouterModule, BookMarkModule, FormsModule,AuthModule ],
    declarations: [NoteDetailComponent, NotesListComponent, NoteEditComponent, NoteNewComponent],
    exports: [NoteDetailComponent, NotesListComponent, NoteEditComponent, NoteNewComponent],
    providers: []
})

export class NotesModule { }