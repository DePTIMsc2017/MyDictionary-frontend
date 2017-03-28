import { Routes, RouterModule } from '@angular/router';
import { WordsComponent } from './words.component';

const routes: Routes = [
  {
    path: 'findword',
    component: WordsComponent
  }
];

export const routing = RouterModule.forChild(routes);
