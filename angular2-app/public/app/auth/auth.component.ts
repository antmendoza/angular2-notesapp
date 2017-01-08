import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'auth',
    templateUrl: 'auth.component.html'
})
export class AuthComponent implements OnInit {
    constructor(private router: Router,
        private _authService: AuthService) { }

    ngOnInit() { }

    logout(): void {
        this._authService.logout();
        this.router.navigate(['/']);
    }


     private isLoggedIn(): boolean {
        return this._authService.isLogged();
    }

}