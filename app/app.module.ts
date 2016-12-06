import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { BookMarkModule } from './bookmark/bookmark.module';
import { BoxFilterModule } from './boxfilter/boxfilter.module';
import { NotesModule } from './notes/notes.module';
import { NotFoundModule } from './not-found/not-found.module';


import { routing } from './app.routing'
import { notesRouting} from './notes/notes.routing';
import { homeRouting} from './home/home.routing';
import { notFoundRouting} from './not-found/not-found.routing';

@NgModule({
  imports: [
            BrowserModule, 
            BoxFilterModule, 
            BookMarkModule, 
            NotesModule, 
            NotFoundModule,
            RouterModule,
            HomeModule,
            notesRouting,
            homeRouting,
            notFoundRouting,
            routing
            ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
