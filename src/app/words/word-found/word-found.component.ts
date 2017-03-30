import { Component, Input } from '@angular/core';

@Component({
    selector: 'word-found',
    templateUrl: './word-found.component.html'
})
export class WordFoundComponent {
  @Input() word;
  @Input() searched: string;

  constructor() { }

}
