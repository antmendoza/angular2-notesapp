import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ShowIfLoggedInComponent }   from './show-if-logged-in.component';
import { AuthComponent }   from './auth.component';
import { LoginFormComponent }   from './login-form.component';

import { AuthGuard } from './auth.guard';

@NgModule({
    imports: [BrowserModule, RouterModule],
    exports: [ShowIfLoggedInComponent, AuthComponent,  LoginFormComponent],
    declarations: [ShowIfLoggedInComponent, AuthComponent,  LoginFormComponent],
    providers: [AuthGuard],
})
export class AuthModule { }
