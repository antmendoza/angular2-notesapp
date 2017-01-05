import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService }   from './auth.service';
 

@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router,
                private _authService: AuthService) { }
 
    canActivate() {
        let isLogged:boolean = this._authService.isLogged();
        if(!isLogged){
            this.router.navigate(['/']);
        }
        return isLogged;
    }
}