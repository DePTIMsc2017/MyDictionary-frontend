import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'word-not-found',
    templateUrl: './word-not-found.component.html',
    styleUrls: ['./word-not-found.component.css'],
})
export class WordNotFoundComponent implements OnInit {
  @Input() searched: string;

  constructor() { }

  ngOnInit() { }

}
