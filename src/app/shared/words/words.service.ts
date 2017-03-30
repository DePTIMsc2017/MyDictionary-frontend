import { Injectable } from '@angular/core';
import { WordsInterface } from './words.interface';
import { wordsMock } from '../mock/words.mock';
import { Word } from '../models/word.model';

@Injectable()
export class WordsService implements WordsInterface {

  search(word: string, from: string, to: string): Array<Word> {
    return wordsMock.filter(item => item.word.toLowerCase() === word.toLowerCase());
  }

  addWord(en: string, hu: string): boolean {
    return undefined;
  }

  deleteWord(word: string, lang: string): boolean {
    return undefined;
  }

}
