import { Routes, RouterModule } from '@angular/router';
import { WordsComponent } from './words.component';
import {wordCollectionListComponent} from "./word-collection/word-collection-list.component";

const routes: Routes = [
  {
    path: 'findword',
    component: WordsComponent
  },
  {
    path: 'collections',
    component: wordCollectionListComponent
  }
];

export const routing = RouterModule.forChild(routes);
