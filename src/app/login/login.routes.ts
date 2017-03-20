import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-component/login.component';
import { RegistrationComponent } from './registration-component/registration.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  }
];

export const routing = RouterModule.forChild(routes);
