import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


import { User } from './user.model';
import { UserService } from './user.service';

@Component({
    moduleId: module.id,
    selector: 'user-setting',
    templateUrl: 'user-setting.component.html'
})
export class UserSettingComponent implements OnInit {

    private user: User;

    constructor(private _router: Router,
                private _userService: UserService) { }

    ngOnInit() {
        this.user = this._userService.user();
    }


    onSubmit() {
		this._userService.save(this.user);
        this._router.navigate(['/']);
     
	}
}