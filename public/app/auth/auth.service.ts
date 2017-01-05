import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class AuthService{
    keyuser = "keyuser-my-app";

    constructor() {
    }

    login(username:string, password: string): string {
        let token = Math.random().toString(36).substr(2);
        let user = {
            "username" : username,
            "token": token
        }
        localStorage.setItem(this.keyuser,JSON.stringify(user));
        return token;
    }

    isLogged(): boolean {
        return localStorage.getItem(this.keyuser) != null;
    }

    logout(): void{
        return localStorage.removeItem(this.keyuser);

    }

}

