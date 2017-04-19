/**
 * Created by Burai Péter on 2017. 04. 08..
 */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routing } from './admin.routing';
import {AddWordComponent} from './add-word/add-word.component';
import {UserManagementComponent} from "./user-management/user-management.component";


@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  exports: [],
  declarations: [
    AddWordComponent,
    UserManagementComponent
  ],
  providers: [],
})
export class AdminModule { }
