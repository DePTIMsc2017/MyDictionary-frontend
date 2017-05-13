import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { WordsInterface } from './words.interface';
import { wordsMock } from '../mock/words.mock';
import { Word } from '../models/word.model';
import endpoints from '../api.endpoints';

@Injectable()
export class WordsService implements WordsInterface {

  private _foundWord: BehaviorSubject<Array<Word>>

  constructor(private http: Http) {}

  search(word: string): Observable<Array<Word>> {
    return this.http.get(`${endpoints.SEARCH}?word=${word}`)
      .map(data => data.json());
  }

  addWord(en: string, hu: string): boolean {
    return undefined;
  }

  deleteWord(word: string, lang: string): boolean {
    return undefined;
  }

}
