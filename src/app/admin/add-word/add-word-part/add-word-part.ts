import { AddWordModel } from './../../../shared/models/add-word.model';
import { Component , Input} from '@angular/core';
import { Word } from "../../../shared/models/word.model";
import { Language } from "../../../shared/models/language.model";

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

  constructor() {
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

  toModelWord(): AddWordModel {
    let temp = new AddWordModel();

    temp.wordHun = this.word;
    temp.word = this.meaning;
    temp.wordClass = this.wordclass;

    return temp;

  }

  getIndex() {
    return this.index;
  }

  isEmpty(): boolean {
    return this.word === '' && this.meaning === '';
  }

}
