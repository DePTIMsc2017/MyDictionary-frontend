import { NgModule } from '@angular/core';

import { UserProfileComponent } from './profile/user-profile.component';
import { SharedModule } from '../shared/shared.module';
import { routing } from './users.routing';

@NgModule({
    imports: [
      SharedModule,
      routing
    ],
    exports: [],
    declarations: [UserProfileComponent],
    providers: [],
})
export class UsersModule { }
