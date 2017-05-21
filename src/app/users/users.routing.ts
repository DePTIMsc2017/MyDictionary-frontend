import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './profile/user-profile.component';
import { AuthGuardService } from '../shared/guards/auth-guard.service';
import {UserProfileSuccess} from "./profile/user-profile-success/user-profile-success";

const routes: Routes = [
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/userprofilesuccess',
    component: UserProfileSuccess,
    canActivate: [AuthGuardService]
  }

];

export const routing = RouterModule.forChild(routes);
