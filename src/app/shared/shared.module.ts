import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LoginService } from './login/login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegistrationService } from './registration/registration.service';
import { WordsService } from './words/words.service';
import { AuthGuardService } from './guards/auth-guard.service';


@NgModule({
    imports: [
      CommonModule,
      TranslateModule,
      FormsModule
    ],
    exports: [
      CommonModule,
      TranslateModule,
      FormsModule
    ],
    declarations: [
    ],
    providers: [
      AuthGuardService,
      LoginService,
      RegistrationService,
      WordsService
    ],
})
export class SharedModule { }
