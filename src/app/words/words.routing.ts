import { Routes, RouterModule } from '@angular/router';
import { WordsComponent } from './words.component';
import {wordCollectionListComponent} from "./word-collection/word-collection-list.component";
import {AuthGuardService} from "../shared/guards/auth-guard.service";

const routes: Routes = [
  {
    path: 'findword',
    component: WordsComponent
  },
  {
    path: 'collections',
    component: wordCollectionListComponent,
    canActivate: [AuthGuardService]
  }
];

export const routing = RouterModule.forChild(routes);
