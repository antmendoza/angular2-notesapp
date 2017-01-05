import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login-form.component.html'
})
export class LoginFormComponent implements OnInit {
    private username: string;
    private password: string;
    constructor(private _authService: AuthService,
        private _location: Location) { }
    ngOnInit() { }

    login(): void {
        this._authService.login(this.username, this.password);
        this._location.back();
    }

}