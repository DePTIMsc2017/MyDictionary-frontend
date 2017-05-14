import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-component/login.component';
import { RegistrationComponent } from './registration-component/registration.component';
import { RegistrationDoneComponent } from './registration-component/registration-done-component/registration-done.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'registerdone',
    component: RegistrationDoneComponent
  }
];

export const routing = RouterModule.forChild(routes);
