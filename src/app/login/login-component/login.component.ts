import { animate, Component, OnInit, state, style, transition, trigger } from '@angular/core';
import { LoginService } from '../../shared/login/login.service';
import { Router } from '@angular/router';

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
export class LoginComponent implements OnInit {
  private failExpression: string = 'no_fail';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() { }

  login(user) {
    if (this.loginService.login(user)) {
      this.router.navigate(['/']);
    } else {
      this.failExpression = 'has_fail';
    }
  }

  onRegister() {
    this.router.navigate(['/register']);
  }
}
