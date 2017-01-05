import { Router, RouterModule } from '@angular/router';

import { NotesListComponent } from './notes-list.component';
import { NoteDetailComponent } from './note-detail.component';
import { NoteEditComponent } from './note-edit.component';
import { NoteNewComponent } from './note-new.component';

import { AuthGuard } from '../../auth/auth.guard';


export const notesRouting = RouterModule.forChild([
    { path: 'notes', component: NotesListComponent },
    { path: 'notes/new', component: NoteNewComponent },
    { path: 'notes/:id', component: NoteDetailComponent },
    { path: 'notes/:id/edit', component: NoteEditComponent, canActivate: [AuthGuard] }
]);