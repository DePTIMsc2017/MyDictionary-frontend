import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { LoginService } from '../shared/login/login.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
})

export class NavbarComponent {

  constructor(
    private loginService: LoginService,
    private translateService: TranslateService
  ) {}

  onTranslate(lang: string): void {
    this.translateService.use(lang);
  }
}
