import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate';
import { LoginService } from './login/login.service';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
      TranslateModule,
      FormsModule
    ],
    exports: [
      TranslateModule,
      FormsModule
    ],
    declarations: [],
    providers: [
      LoginService
    ],
})
export class SharedModule { }
