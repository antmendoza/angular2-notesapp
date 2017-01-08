import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent }   from './header.component';
import { AuthModule }   from '../../auth/auth.module';
import { SearchModule } from "../shared/services/search/search.module";


@NgModule({
    imports: [BrowserModule, RouterModule, AuthModule, SearchModule],
    exports: [HeaderComponent],
    declarations: [HeaderComponent],
    providers: [],
})
export class HeaderModule { }
