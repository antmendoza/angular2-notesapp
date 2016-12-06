import { NgModule }      from '@angular/core'; 
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'; 
import { BoxFilterComponent }  from './boxfilter.component'; 

 


@NgModule({ 
    imports: [BrowserModule, FormsModule], 
    declarations: [BoxFilterComponent], 
    exports: [BoxFilterComponent], 
}) 

export class BoxFilterModule { }