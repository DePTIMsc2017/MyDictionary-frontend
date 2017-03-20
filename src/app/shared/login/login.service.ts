import { Injectable } from '@angular/core';

import { LoginInterface } from './login.interface';
import { LoginModel } from '../models/login.model';

// MOCK
let usersMock = [
  {
    username: 'teszt@teszt.hu',
    password: 'teszt'
  },
  {
    username: 'admin@admin.hu',
    password: 'admin'
  }
];

@Injectable()
export class LoginService implements LoginInterface {
  private _token: String = null;

  constructor(
  ) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this._token = currentUser && currentUser.token;
  }

  login(user: LoginModel): boolean {
    let userExists = usersMock.filter(data => {
      return data.username === user.loginEmail;
    });
    if (userExists.length != 1) {
      return false;
    } else {
      if(userExists[0].password === user.loginPasswd) {
        this._token = 'ABCDEFGHIJKLMNOPK';
        localStorage.setItem('currentUser', JSON.stringify({username: user.loginEmail, token: this._token}));
        return true;
      } else {
        return false;
      }
    }
  }

  logout(): boolean {
    this._token = null;
    localStorage.removeItem('currentUser');
    return true;
  }

  isLoggedIn(): boolean {
    return this._token !== null;
  }

}
