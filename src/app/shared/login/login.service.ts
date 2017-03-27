import { Injectable } from '@angular/core';

import { LoginInterface } from './login.interface';
import { LoginModel } from '../models/login.model';
import { usersMock } from '../mock/users.mock';

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
      return data.email === user.loginEmail;
    });
    if (userExists.length != 1) {
      return false;
    } else {
      if(userExists[0].password === user.loginPasswd) {
        this._token = 'ABCDEFGHIJKLMNOPK';
        localStorage.setItem('currentUser', JSON.stringify({username: userExists[0].username, token: this._token}));
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
