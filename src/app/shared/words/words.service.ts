import { Injectable } from '@angular/core';
import { WordsInterface } from './words.interface';

@Injectable()
export class WordsService implements WordsInterface {

  search(word: string, from: string, to: string): any {
    return undefined;
  }

  addWord(en: string, hu: string): boolean {
    return undefined;
  }

  deleteWord(word: string, lang: string): boolean {
    return undefined;
  }

}
