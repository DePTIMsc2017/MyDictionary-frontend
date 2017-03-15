import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate';
import { LoginService } from './login/login.service';


@NgModule({
    imports: [
      TranslateModule
    ],
    exports: [
      TranslateModule
    ],
    declarations: [],
    providers: [
      LoginService
    ],
})
export class SharedModule { }
