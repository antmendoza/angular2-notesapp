import { Component, OnInit, Input } from '@angular/core';
import { AuthService }   from './auth.service';


@Component({
    moduleId: module.id,
    selector: 'show-if-logged-in',
    templateUrl: 'show-if-logged-in.component.html'
})
export class ShowIfLoggedInComponent implements OnInit {
    
    @Input() private notLoggedMessage: string;
    constructor(private _auth: AuthService) { }

    ngOnInit() { }


    private isLoggedIn(): boolean {
        return this._auth.isLogged();
    }
}