import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home-component/home.component';
import { AboutComponent } from './home/about/about.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing = RouterModule.forRoot(routes);
