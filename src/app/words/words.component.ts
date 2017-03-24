import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'words-component',
    template: `
      <word-found [word]="_foundWords" *ngIf="_wordsFound"></word-found>
      <word-not-found></word-not-found>
    `
})
export class WordsComponent implements OnInit {

  private _foundWords;
  private _wordsFound: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._foundWords = ['alma', 'kacsa'];
    this._wordsFound = true;
  }

}
