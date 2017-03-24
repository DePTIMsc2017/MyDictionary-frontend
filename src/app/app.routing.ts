import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home-component/home.component';
import { AboutComponent } from './home/about/about.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component'
import { LoginComponent } from './login/login-component/login.component'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const routing = RouterModule.forRoot(routes);