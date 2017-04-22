/**
 * Created by Burai Péter on 2017. 04. 08..
 */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routing } from './admin.routing';
import {AddWordComponent} from './add-word/add-word.component';
import {AddWordPartComponent} from "./add-word/add-word-part/add-word-part";


@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  exports: [],
  declarations: [
    AddWordComponent,
    AddWordPartComponent
  ],
  providers: [],
})
export class AdminModule { }
