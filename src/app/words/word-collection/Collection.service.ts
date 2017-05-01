import { Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {collectionsMock} from "../../shared/mock/collection.mock";

@Injectable()
export class CollectionsService {
  private _collections: BehaviorSubject<Array<any>>;
  private _helpItems: BehaviorSubject<Array<any>>;

  constructor() {
    this._collections = new BehaviorSubject([]);
    //this._helpItems = new BehaviorSubject([]);
  }

  get collections() {
    return this._collections.asObservable();
  }

  getCollections() {
    this._collections.next(collectionsMock.slice().reverse());
  }

  addCollection(item) {
    collectionsMock.push(item);
    this.getCollections();
  }

  /*
  editNews(item) {
    _newsMock.push(item);
    this.getNews();
  }
  */

  deleteCollection(item) {
    collectionsMock.splice(collectionsMock.indexOf(item), 1);
    this.getCollections();
  }
  /*
  markAsRead(item, userName) {
    _newsMock[_newsMock.indexOf(item)].read.push(userName);
    this.getNews();
  }
  */
  loadMoreNews() {
    // implement
  }

 /*
  get helpItems() {
    return this._helpItems.asObservable();
  }

  getHelpItems() {
    this._helpItems.next(_helpMock);
  }

  addHelp(item) {
    _helpMock.push(item);
    this.getNews();
  }

  editHelp(item) {
    _helpMock.push(item);
    this.getNews();
  }

  deleteHelp(item) {
    _helpMock.splice(_newsMock.indexOf(item), 1);
    this.getNews();
  }
  */
}
