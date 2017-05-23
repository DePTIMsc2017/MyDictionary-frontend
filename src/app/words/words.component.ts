import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordsService } from '../shared/words/words.service';
import { Word } from '../shared/models/word.model';

@Component({
    selector: 'words-component',
    template: `
      <word-found [words]="_foundWords" [searched]="_searchedWord" *ngIf="_wordsFound"></word-found>
      <word-not-found [searched]="_searchedWord" *ngIf="!_wordsFound"></word-not-found>
    `
})
export class WordsComponent implements OnInit {

  private _searchedWord: string;
  private _foundWords: Array<Word>;
  private _wordsFound: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private wordService: WordsService
  ) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(
      param => {
        this._searchedWord =   param['word'].toLowerCase();
        this.wordService.search(param['word'])
          .subscribe(data => {
            this._foundWords = data;
            this._wordsFound = data.length > 0;
          });
      }
    );
  }

}
