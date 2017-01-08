import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { HomeComponent }   from './home.component';


import { AuthModule } from '../../auth/auth.module';



@NgModule({
    imports: [BrowserModule, AuthModule], 
    declarations: [HomeComponent], 
    exports: [HomeComponent]
})
export class HomeModule { }
