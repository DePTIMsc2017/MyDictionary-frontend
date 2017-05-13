import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Word } from '../../shared/models/word.model';

@Component({
    selector: 'word-found',
    templateUrl: './word-found.component.html',
  styleUrls: ['./word-found.component.css']
})
export class WordFoundComponent implements OnInit {
  @Input() words: Array<Word>;
  @Input() searched: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.words);
  }
}
