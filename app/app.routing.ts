import { Router, RouterModule } from '@angular/router';

import { BookMarkModule } from './bookmark/bookmark.module';
import { BoxFilterModule } from './boxfilter/boxfilter.module';
import { NotesModule } from './notes/notes.module';
import { HomeComponent } from './home/home.component';

import { NotesListComponent } from './notes/notes-list.component';
import { NoteDetailComponent } from './notes/note-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';



export const routing = RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'notes', component: NotesListComponent},
    {path: '**', component: NotFoundComponent}
//TODO add not-found

]);