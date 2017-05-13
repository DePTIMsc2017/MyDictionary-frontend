import { NgModule } from '@angular/core';
import { LoginComponent } from './login-component/login.component';
import { routing } from './login.routes';
import { SharedModule } from '../shared/shared.module';
import { RegistrationComponent } from './registration-component/registration.component';
import { ReadTermsComponent } from './registration-component/read-terms.component';
import { RegistrationDoneComponent } from './registration-component/registration-done-component/registration-done.component';

@NgModule({
    imports: [
      SharedModule,
      routing
    ],
    exports: [],
    declarations: [
      LoginComponent,
      RegistrationComponent,
      ReadTermsComponent,
      RegistrationDoneComponent
    ],
    providers: [],
    entryComponents: [
         ReadTermsComponent
    ]
})
export class LoginModule { }
