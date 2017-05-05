import { animate, state, style, transition, trigger } from '@angular/animations';
import { LoginService } from '../../shared/login/login.service';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginModel } from '../../shared/models/login.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [trigger(
    'onfail', [
      state('has_fail, void', style({opacity: 1.0})),
      state('no_fail', style({opacity: 0})),
      transition(
        'no_fail <=> has_fail', [animate(500), animate(500)])
    ]
  )]
})
export class LoginComponent implements OnInit, OnDestroy {
  private failExpression: string = 'no_fail';

  private sub: Subscription;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.loginService.authenticateError.subscribe(item => {
      item ? this.failExpression = 'has_fail' : this.failExpression = 'no_fail';
    });
  }

  ngOnDestroy(): void {
    if (this.sub !== undefined) {
      this.sub.unsubscribe();
    }
  }

  login(user: LoginModel) {
    this.loginService.login(user);
  }

  onRegister() {
    this.router.navigate(['/register']);
  }
}
