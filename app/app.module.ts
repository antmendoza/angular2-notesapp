import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotesListComponent } from './notes/notes-list.component';
import { BookMarkModule } from './bookmark/bookmark.module';
import { BoxFilterComponent } from './boxfilter/boxfilter.component';



@NgModule({
  imports: [BrowserModule, FormsModule, BookMarkModule],
  declarations: [AppComponent, NotesListComponent, BoxFilterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
