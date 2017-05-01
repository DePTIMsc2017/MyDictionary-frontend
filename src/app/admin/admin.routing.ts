import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../shared/guards/auth-guard.service';
import {AddWordComponent} from "./add-word/add-word.component";
import {UserManagementComponent} from "./user-management/user-management.component";
import {WordSuggestionComponent} from "./word-suggestion/word-suggestion.component";

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
  },
  {
    path: 'admin/suggestedwords',
    component: WordSuggestionComponent,
    canActivate: [AuthGuardService]
  }

];

export const routing = RouterModule.forChild(routes);
