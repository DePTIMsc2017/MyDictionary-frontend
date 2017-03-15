import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { routing } from './app.routing';

import { HomeModule } from './home/home.module';
import { TranslateModule, TranslateLoader } from 'ng2-translate';
import { createTranslateLoader } from './shared/utils';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    LoginModule,
    NavbarModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    routing
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
