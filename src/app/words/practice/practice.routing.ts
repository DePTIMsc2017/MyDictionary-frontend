import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../../shared/guards/auth-guard.service';
import {HangmanComponent} from "./hangman/hangman.component";


const routes: Routes = [
  {
    path: 'practice',
    component: HangmanComponent,
    canActivate: [AuthGuardService]
  }

];

export const routing = RouterModule.forChild(routes);
