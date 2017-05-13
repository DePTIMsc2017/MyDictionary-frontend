import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module'
import { routing } from '../practice/practice.routing';
import {HangmanComponent} from "./hangman/hangman.component";



@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  exports: [  ],
  declarations: [
        HangmanComponent
  ],
  providers: [],
})
export class PracticeModule { }
