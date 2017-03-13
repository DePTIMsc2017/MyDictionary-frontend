import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { routing } from '../app.routing';
import { TranslateModule } from 'ng2-translate';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
      SharedModule,
      routing
    ],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
