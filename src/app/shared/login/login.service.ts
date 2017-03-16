import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LoginInterface } from './login.interface';
import { LoginModel } from '../models/login.model';

@Injectable()
export class LoginService implements LoginInterface {
  // MOCK
  loggedin: boolean = false;

  constructor(
    private router: Router
  ) {}

  login(user: LoginModel): string {
    this.loggedin = true;
    this.router.navigate(['/']);
    return undefined;
  }

  logout(): string {
    this.loggedin = false;
    return undefined;
  }

  checkUserExist(username: string): boolean {
    return undefined;
  }

  isLoggedIn(): boolean {
    return this.loggedin;
  }

}
