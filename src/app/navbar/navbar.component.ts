import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
})

export class NavbarComponent {

  constructor(
    private translateService: TranslateService
  ) {}

  onTranslate(lang: string): void {
    this.translateService.use(lang);
  }
}
