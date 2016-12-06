import { Router, RouterModule } from '@angular/router';

import { NotesListComponent } from './notes-list.component';
import { NoteDetailComponent } from './note-detail.component';


export const notesRouting = RouterModule.forChild([
    {path: 'notes', component: NotesListComponent},
    {path: 'notes/:id', component: NoteDetailComponent},
]);