import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate';
import { LoginService } from './login/login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegistrationService } from './registration/registration.service';


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
    declarations: [],
    providers: [
      LoginService,
      RegistrationService
    ],
})
export class SharedModule { }
