import { Injectable } from '@angular/core';

import { User } from './user.model';

@Injectable()
export class UserService {
    private keyuser: string = "my-user";
    constructor() { }

    save(user: User) {
        localStorage.setItem(this.keyuser, JSON.stringify(user));
    }

    user(): User {
        let user: User = JSON.parse(localStorage.getItem(this.keyuser));

        if (user) {
            return user;
        } else {
            return {
                "username": "fake-username",
                "email": "fake@email.com",
                "password": "fake-password"
            }
        }
    }


}