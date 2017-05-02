import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LoginInterface } from './login.interface';
import { LoginModel } from '../models/login.model';
import endpoints from '../api.endpoints';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class LoginService implements LoginInterface {
  private _loggedIn: Subject<boolean>;
  private _authenticateError: Subject<boolean>;

  constructor(private http: Http, private router: Router) {
    this._authenticateError = new Subject();
    this._loggedIn = new Subject();

  }

  login(user: LoginModel): void {
    let headers = new Headers();
    headers.set('Content-type', 'application/json');

    this.http.post(endpoints.AUTHENTICATE, user, headers)
      .subscribe(data => {
        sessionStorage.setItem('token', data.headers.get('X-AUTH-TOKEN'));
        sessionStorage.setItem('username', user.username);
        this._loggedIn.next(true);
        this._authenticateError.next(false);
        this.router.navigate(['/'])
      },
      error => {
        this._authenticateError.next(true);
        this._loggedIn.next(false);
      });
  }

  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return tokenNotExpired('id-token', sessionStorage.getItem('token'));
  }

  getActualUser(): string {
    return sessionStorage.getItem('username');
  }

  get authenticateError() {
    return this._authenticateError.asObservable();
  }
}
