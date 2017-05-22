import { NgModule } from '@angular/core';

import { UserProfileComponent } from './profile/user-profile.component';
import { SharedModule } from '../shared/shared.module';
import { routing } from './users.routing';
import {UserProfileSuccess} from "./profile/user-profile-success/user-profile-success";

@NgModule({
    imports: [
      SharedModule,
      routing
    ],
    exports: [],
    declarations: [
      UserProfileComponent,
      UserProfileSuccess
    ],
    providers: [],
})
export class UsersModule { }
