import { NgModule }      from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { BookMarkComponent }  from './bookmark.component'; 
 
@NgModule({ 
    imports: [BrowserModule], 
    declarations: [BookMarkComponent], 
    exports: [BookMarkComponent], 
}) 

export class BookMarkModule { }