/**
 * Created by Burai Péter on 2017. 04. 08..
 */
import {Component, ViewChildren, QueryList} from '@angular/core';
import {AddWordPartComponent} from "./add-word-part/add-word-part";
import {Observable} from "rxjs";
import { wordsMock } from '../../shared/mock/words.mock';


@Component({
  selector: 'add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent  {

  @ViewChildren(AddWordPartComponent) addWordPartComponentItems: QueryList<AddWordPartComponent>;
  items=[];

  constructor() {
    this.items.push(wordsMock.length*2+1);
  }

  duplikal(times) {
    for (let i = 0; i < times; i++) {
      this.items.push(this.items[this.items.length-1]+2);
    }
    console.log(this.items.toString());
  }

  onSubmit(){
    Observable.from(this.addWordPartComponentItems.toArray())
      .map(item => item.toModelWord())
      .subscribe(data =>
        wordsMock.push(data)
      );

  }
}
