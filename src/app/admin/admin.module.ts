/**
 * Created by Burai Péter on 2017. 04. 08..
 */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routing } from './admin.routing';
import {AddWordComponent} from './add-word/add-word.component';
import {AddWordPartComponent} from "./add-word/add-word-part/add-word-part";
import {UserManagementComponent} from "./user-management/user-management.component";
import {WordSuggestionComponent} from "./word-suggestion/word-suggestion.component";
import {AddWordSuccess} from "./add-word/add-word-success/add-word-success";


@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  exports: [  ],
  declarations: [
    AddWordComponent,
    AddWordPartComponent,
    UserManagementComponent,
    WordSuggestionComponent,
    AddWordSuccess
  ],
  providers: [],
})
export class AdminModule { }
