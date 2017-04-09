import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../shared/guards/auth-guard.service';
import {AddWordComponent} from "./add-word/add-word.component";

const routes: Routes = [
  {
    path: 'admin/addword',
    component: AddWordComponent,
    canActivate: [AuthGuardService]
  }

];

export const routing = RouterModule.forChild(routes);
