import { Component , Input} from '@angular/core';
import { Word } from "C:/Users/Burai Péter/Egyetem/2. félév/szoftverrendszerek tervezése/project/MyDictionary-frontend/src/app/shared/models/word.model"
import { Language } from "C:/Users/Burai Péter/Egyetem/2. félév/szoftverrendszerek tervezése/project/MyDictionary-frontend/src/app/shared/models/language.model";

@Component({
  selector: 'add-word-part',
  templateUrl: './add-word-part.html',
  styleUrls: ['./add-word-part.css']
})
export class AddWordPartComponent{
  @Input() index: number;
  word = '';
  meaning = '';
  wordclass = 'főnév';
  tmp = new Word();

  constructor() {
      this.tmp.language = new Language();
    this.tmp.wordMeaning1 = [new Word()];
      this.tmp.wordMeaning1[0].language = new Language();
  }

  private wordclasses = [{
    "noun": "főnév",
    "adjactive": "melléknév",
    "verb": "ige",
    "adverb": "határozószó"
  }];

  getData() {
    return { word: this.word, meaning: this.meaning, wordclass: this.wordclass};
  }

  toModelWord() {

    let wc = "addWord." + this.wordclass;
    //const lang = localStorage.getItem('md-lang');
    this.tmp.id = this.index;
    this.tmp.word = this.word;
    //if (lang == 'En')
     // tmp.wordClass = this.wordclasses[this.wordclass];
    //else  tmp.wordClass = this.wordclass;
    this.tmp.language.id = 1;
    this.tmp.language.name = 'magyar';
    this.tmp.wordMeaning1[0].id = this.index+ 1;
    this.tmp.wordMeaning1[0].word = this.meaning;
    this.tmp.wordMeaning1[0].wordClass = this.tmp.wordClass;
    this.tmp.wordMeaning1[0].language.id = 2;
    this.tmp.wordMeaning1[0].language.name = 'angol';
    return this.tmp;

  }

  getIndex() {
    return this.index;
  }


}
