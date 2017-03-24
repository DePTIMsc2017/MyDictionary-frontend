import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './profile/user-profile.component';
const routes: Routes = [
  {
    path: 'profile',
    component: UserProfileComponent
  }
];

export const routing = RouterModule.forRoot(routes);
