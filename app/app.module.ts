import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BookMarkModule } from './bookmark/bookmark.module';
import { BoxFilterModule } from './boxfilter/boxfilter.module';
import { NotesModule } from './notes/notes.module';



@NgModule({
  imports: [BrowserModule, BoxFilterModule, BookMarkModule, NotesModule],
  declarations: [AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
