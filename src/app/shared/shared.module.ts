import { AuthConfig } from 'angular2-jwt/angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import { MDHTTP } from './MDHTTP';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LoginService } from './login/login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegistrationService } from './registration/registration.service';
import { WordsService } from './words/words.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

function MDHttpServiceFactory(http: Http, options: RequestOptions, loginService: LoginService) {
  return new MDHTTP(new AuthConfig({
    tokenGetter: (() => sessionStorage.getItem('id-token')),
    globalHeaders: [{ 'Content-Type': 'application/json' }]
  }), http, options, loginService);
}

@NgModule({
    imports: [
      CommonModule,
      TranslateModule,
      FormsModule
    ],
    exports: [
      CommonModule,
      TranslateModule,
      FormsModule,
      NgbModule
    ],
    declarations: [
    ],
    providers: [
      AuthGuardService,
      LoginService,
      RegistrationService,
      WordsService,
      {
        provide: MDHTTP,
        useFactory: MDHttpServiceFactory,
        deps: [Http, RequestOptions, LoginService]
      }
    ]
})
export class SharedModule { }
