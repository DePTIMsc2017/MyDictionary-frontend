import { NgModule } from '@angular/core';
import { LoginComponent } from './login-component/login.component';
import { routing } from './login.routes';
import { SharedModule } from '../shared/shared.module';
import { RegistrationComponent } from './registration-component/registration.component';

@NgModule({
    imports: [
      SharedModule,
      routing
    ],
    exports: [],
    declarations: [
      LoginComponent,
      RegistrationComponent
    ],
    providers: [],
})
export class LoginModule { }
