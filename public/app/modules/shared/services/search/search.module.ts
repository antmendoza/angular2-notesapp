import { NgModule }      from '@angular/core'; 
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'; 
import { SearchComponent }  from './search.component'; 

@NgModule({ 
    imports: [BrowserModule, FormsModule], 
    declarations: [SearchComponent], 
    exports: [SearchComponent], 
}) 

export class SearchModule { }