import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './profile/user-profile.component';
import { AuthGuardService } from '../shared/guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'userprofile',
    component: UserProfileComponent,
    canActivate: [AuthGuardService]
  }
];

export const routing = RouterModule.forChild(routes);
