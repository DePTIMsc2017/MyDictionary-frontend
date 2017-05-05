import { Component, Input, OnInit } from '@angular/core';
import {AddWordPartComponent} from "../../admin/add-word/add-word-part/add-word-part";
import {suggestedWordsMock, wordsMock} from "../../shared/mock/words.mock";



@Component({
    selector: 'word-not-found',
    templateUrl: './word-not-found.component.html',
    styleUrls: ['./word-not-found.component.css']
})
export class WordNotFoundComponent implements OnInit {
  @Input() searched: string;
  addwordcomponent: AddWordPartComponent;
  suggest: boolean;
  constructor() { }

  ngOnInit() {
    this.suggest = false;
    this.addwordcomponent = new AddWordPartComponent();
    this.addwordcomponent.index = suggestedWordsMock.length*2+1;
  }

  onSubmit(values){
    //console.log(values);
    this.addwordcomponent.word = this.searched;
    this.addwordcomponent.meaning = values.meaning;
    this.addwordcomponent.wordclass = values.wordclass;
    //.log(this.addwordcomponent.wordclass);
    let tmp = this.addwordcomponent.toModelWord();
    let existWord = suggestedWordsMock.filter(w => {
      return w.word === tmp.word;
    });
     if(existWord.length == 0)
          suggestedWordsMock.push(this.addwordcomponent.toModelWord());
    //console.log(suggestedWordsMock);
    //console.log(wordsMock);
  }

  onSuggest(){
    this.suggest = true;
  }
}
