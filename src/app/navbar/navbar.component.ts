import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { LoginService } from '../shared/login/login.service';
import { lang } from 'moment';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  private _lang: string;

  constructor(
    private loginService: LoginService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this._lang = "Hu";
  }

  onTranslate(): void {
    if (this._lang === "Hu") {
      this._lang = "En";
    } else {
      this._lang = "Hu";
    }

    localStorage.setItem('md-lang', this._lang);
    this.translateService.use(this._lang);
  }
}
