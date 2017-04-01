import { NgModule } from '@angular/core';

import { WordFoundComponent } from './word-found/word-found.component';
import { WordsComponent } from './words.component';
import { WordNotFoundComponent } from './word-not-found/word-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { routing } from './words.routing';

@NgModule({
    imports: [
      SharedModule,
      routing
    ],
    exports: [],
    declarations: [
      WordsComponent,
      WordFoundComponent,
      WordNotFoundComponent
    ],
    providers: [],
})
export class WordsModule { }
