import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';

import { HomeModule } from './home/home.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from './shared/utils';
import { LoginModule } from './login/login.module';
import { UsersModule } from './users/users.module';
import { WordsModule } from './words/words.module';

import { routing } from './app.routing';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    WordsModule,
    HttpModule,
    UsersModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [Http]
      }
    }),
    routing,
    PageNotFoundModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
