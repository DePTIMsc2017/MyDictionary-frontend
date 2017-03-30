import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'words-component',
    template: `
      <word-found [word]="_foundWords" [searched]="_searchedWord" *ngIf="_wordsFound"></word-found>
      <word-not-found [searched]="_searchedWord" ></word-not-found>
    `
})
export class WordsComponent implements OnInit {

  private _searchedWord: string;
  private _foundWords;
  private _wordsFound: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(
      param => {
        this._searchedWord = param['word'];
      }
    );

    this._foundWords = ['alma', 'kacsa'];
    this._wordsFound = true;
  }

}
