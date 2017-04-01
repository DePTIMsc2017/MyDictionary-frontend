import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'word-not-found',
    templateUrl: './word-not-found.component.html'
})
export class WordNotFoundComponent implements OnInit {
  @Input() searched: string;

  constructor() { }

  ngOnInit() { }

}
