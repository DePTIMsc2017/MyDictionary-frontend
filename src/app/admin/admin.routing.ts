import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../shared/guards/auth-guard.service';
import {AddWordComponent} from "./add-word/add-word.component";
import {UserManagementComponent} from "./user-management/user-management.component";

const routes: Routes = [
  {
    path: 'admin/addword',
    component: AddWordComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/usermanagement',
    component: UserManagementComponent,
    canActivate: [AuthGuardService]
  }

];

export const routing = RouterModule.forChild(routes);
