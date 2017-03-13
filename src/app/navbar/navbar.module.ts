import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar.component';
import { routing } from '../app.routing';
import { SidebarComponent } from './sidebar.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      CommonModule,
      routing
    ],
    exports: [ NavbarComponent, SidebarComponent ],
    declarations: [ NavbarComponent, SidebarComponent ],
    providers: [],
})
export class NavbarModule { }
