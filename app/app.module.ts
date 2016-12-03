import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotesListComponent } from './notes/notes-list.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { BoxFilterComponent } from './boxfilter/boxfilter.component';



@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NotesListComponent, BookmarkComponent, BoxFilterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
