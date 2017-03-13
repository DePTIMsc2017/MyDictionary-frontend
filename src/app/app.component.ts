import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private _showIt: boolean = false;

  constructor(
    private translateService: TranslateService
  ) {
    this.translateService.addLangs(['en', 'hu']);
    this.translateService.setDefaultLang('hu');
    this.translateService.onLangChange
      .subscribe(e => localStorage.setItem('mm-lang', e.lang));

    const lang = localStorage.getItem('mm-lang');
    this.translateService.use(lang ? lang : 'hu');
  }
}
