import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { LoginService } from './shared/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private _showIt: boolean = false;

  constructor(
    private translateService: TranslateService,
    private loginService: LoginService
  ) {
    this.translateService.addLangs(['en', 'hu']);
    this.translateService.setDefaultLang('hu');
    this.translateService.onLangChange
      .subscribe(e => localStorage.setItem('mm-lang', e.lang));

    const lang = localStorage.getItem('mm-lang');
    this.translateService.use(lang ? lang : 'hu');
  }

  ngOnInit(): void {
  }
}
