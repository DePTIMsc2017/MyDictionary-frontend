import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { routing } from '../app.routing';

@NgModule({
    imports: [
      routing
    ],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
