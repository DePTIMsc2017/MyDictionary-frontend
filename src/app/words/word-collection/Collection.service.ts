import { Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {collectionsMock} from "../../shared/mock/collection.mock";
import { wordsMock} from "../../shared/mock/words.mock";
import { Word} from "../../shared/models/word.model";
import { collectionListMock } from "../../shared/mock/collection-list.mock";
import {Collection} from "../../shared/models/collection.model";
import {collectionList} from "../../shared/models/collection-list.model";

@Injectable()
export class CollectionsService {
  private _collections: BehaviorSubject<Array<any>>;
  private _words: Array<any>;
  private _colID: number;

  constructor() {
    this._collections = new BehaviorSubject([]);
    this._words= new Array(Word);
  }

  get collections() {
    return this._collections.asObservable();
  }

  get words() {
    return this._words;
  }

  getCollections() {
    this._collections.next(collectionsMock.slice().reverse());
  }

  addCollection(item) {
    collectionsMock.push(item);
    this.getCollections();
  }

  deleteCollection(item) {
    collectionsMock.splice(collectionsMock.indexOf(item), 1);
    this.getCollections();
  }

  deleteWord(id)
  {
    this._words = this._words.filter(word => word.id != id);
    collectionListMock.forEach(col => {
      if(col.colId === this._colID)
      {
       // col.words = col.words.filter(wordID => wordID !=id);
      }
    });
  }


  getWords(item)
  {
    this._colID = item.id;
    let array = [];
    let col: Array<collectionList>;
    col = collectionListMock.filter( col => col.colId === item.id);
    console.log(col[0].words[0]);
    col[0].words.forEach(w => wordsMock.forEach( word => {
      if(word.id === w['id']){
        array.push(word);
        // let ownWord = Object.assign(new Word(),word);
        // word.wordMeaning1.forEach(mean => {
        //   if(mean.id in w['meaningIDs'])
        //   {
        //     ownWord.wordMeaning1.push(Object.assign(new Word(),mean));
        //   }
        //
        // });
        // console.log(ownWord);
        // console.log(word);
        // ownWord.wordMeaning1.splice(0,1);
        // console.log(ownWord);
        // console.log(word);
      }

    }));//word.id === id ? array.push(word): id));

    this._words = array;
    return this._words;
  }

  getWordsbyId(id)
  {
    let array = [];
    let col = collectionListMock.filter( col => col.colId === id);
    //col[0].words.forEach(id => wordsMock.forEach( word => word.id === id ? array.push(word): id));

    this._words = array;
    return this._words;
  }

  getIDs(id)
  {
    let ids = [];
    let col = collectionListMock.filter( col => col.colId == id);
    col[0].words.forEach(id => wordsMock.forEach( word => {

      // if(word.id == id)
      // {
      //   this._words.push(word);
      //   ids.push(id);
      // }

    }));

    return ids;
  }

  getWord(wordId)
  {
    if(wordId == -1)
      return undefined;
    let w;
    this._words.forEach(id => wordsMock.forEach( word => word.id == wordId ? w = word: wordId));

    return w.wordMeaning1[0].word;
  }

  getLastColId()
  {
    let LastID =-1;
    this.collections.forEach(col => LastID < col[col.length-1] ? LastID = col[col.length-1] : LastID);
    return LastID;
  }

  createCollection(name:string, description:string)
  {
    let col = new Collection();
    col.id = this.getLastColId()+1;
    col.name= name;
    col.subject = description;
    col.size=0;

    this.addCollection(col);
  }

  moveWord(wordId,meaningId,newColId )
  {
    let col = collectionListMock.filter( col => col.colId === newColId );
    console.log(col[0].words);
    // col[0].words.forEach(w => wordsMock.forEach( word => {
    //   if(word.id === w.id){
    //     let ownWord = word;
    //     ownWord.wordMeaning1.splice(0,1);
    //     console.log(ownWord);
    //     console.log(word);
    //   }
    //
    // }));

  }

}
