import { Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {collectionsMock} from "../../shared/mock/collection.mock";
import { wordsMock} from "../../shared/mock/words.mock";
import { Word} from "../../shared/models/word.model";
import { collectionListMock } from "../../shared/mock/collection-list.mock";
import {Collection} from "../../shared/models/collection.model";
import {collectionList} from "../../shared/models/collection-list.model";
import endpoints from '../../shared/api.endpoints';
import {MDHTTP} from '../../shared/MDHTTP';

@Injectable()
export class CollectionsService {
  private _collections: BehaviorSubject<Array<any>>;
  private _words: Array<any>;
  private _colID: number;
  private _userID: number;


  constructor(private mdhttp: MDHTTP) {
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
    let username= sessionStorage.getItem('currentUser');
    let array = new Array<Collection>();
    let tmp = new Collection();
    let dada:any;
    this.mdhttp.get(`${endpoints.COLLECTIONS}?username=${username}`)
      .map(data => data.json())
      .subscribe(data => {
          console.log(data);
          data.forEach(col => {
            this._userID = col['creator'].id;
              tmp = new Collection();
            tmp.name = col['name'];
            tmp.id = col['id'];
            array.push(tmp);
            this._collections.next(array.slice().reverse());
          })
        },
        error => {
        console.log("HIBA");
        });

    //this._collections.next(array.slice().reverse());
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


  getWords(id)
  {
    let colwords = new Array<Word>();
    this.mdhttp.get(`${endpoints.WORDLIST}?id=${id}`)
      .map(data => data.json())
      .subscribe(data => {
          console.log(data[0].words);

          data[0].words.forEach(w => {
            colwords.push(w);


          })

        },
        error => {
          console.log("HIBA");
        });

    /*
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
    */
    //this._words = array;
    return colwords;
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

  createCollection(name:string)
  {
    let userId= sessionStorage.getItem('id-token');
    let obj = {'id': this._userID, 'name': name};
    this.mdhttp.post(endpoints.CREATEGROUP, obj)
      .subscribe(data => {

        console.log(data);
      });
    setTimeout(function(){
      //do what you need here
    }, 2000);
    this.getCollections();

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
