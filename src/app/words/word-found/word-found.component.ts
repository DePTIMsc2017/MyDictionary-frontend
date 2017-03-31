import { Component, Input } from '@angular/core';
import { Word } from '../../shared/models/word.model';

@Component({
    selector: 'word-found',
    templateUrl: './word-found.component.html'
})
export class WordFoundComponent {
  @Input() words: Array<Word>;
  @Input() searched: string;

  constructor() { }

}
