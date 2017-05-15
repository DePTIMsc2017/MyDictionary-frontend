import { Language } from './language.model';

export class Word {
  id: number;
  word: string;
  wordClass: string;
  language: Language;
  wordMeaning1?: Array<Word>;
}
