import { NgModule } from '@angular/core';

import { WordFoundComponent } from './word-found/word-found.component';
import { WordsComponent } from './words.component';
import { WordNotFoundComponent } from './word-not-found/word-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { routing } from './words.routing';
import {AdminModule} from "../admin/admin.module";
import {wordCollectionListComponent} from "./word-collection/word-collection-list.component";
import {wordCollectionItemComponent} from "./word-collection/word-collection-item.component";
import {CollectionsService} from "./word-collection/Collection.service";
import {CreateWordCollectionComponent} from "./word-collection/word-collection-create.component";


@NgModule({
    imports: [
      SharedModule,
      routing,
      AdminModule
    ],
    exports: [],
    declarations: [
      WordsComponent,
      WordFoundComponent,
      WordNotFoundComponent,
      wordCollectionListComponent,
      wordCollectionItemComponent,
      CreateWordCollectionComponent
    ],
    providers: [
      CollectionsService
    ],
    entryComponents: [
      CreateWordCollectionComponent
    ]
})
export class WordsModule { }
