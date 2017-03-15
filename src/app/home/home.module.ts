import { NgModule } from '@angular/core';

import { HomeComponent } from './home-component/home.component';
import { routing } from '../app.routing';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';

@NgModule({
    imports: [
      SharedModule,
      routing
    ],
    exports: [],
    declarations: [
      HomeComponent,
      AboutComponent
    ],
    providers: [],
})
export class HomeModule { }
