import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate';
import { LoginService } from './login/login.service';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
      CommonModule,
      TranslateModule,
      FormsModule
    ],
    exports: [
      CommonModule,
      TranslateModule,
      FormsModule
    ],
    declarations: [
      PageNotFoundComponent
    ],
    providers: [
      LoginService
    ],
})
export class SharedModule { }
