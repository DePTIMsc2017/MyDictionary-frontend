import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
    this.translateService.addLangs(['En', 'Hu']);
    this.translateService.setDefaultLang('Hu');
    this.translateService.onLangChange
      .subscribe(e => localStorage.setItem('md-lang', e.lang));

    const lang = localStorage.getItem('md-lang');
    this.translateService.use(lang ? lang : 'Hu');
  }

  ngOnInit(): void {
  }
}
