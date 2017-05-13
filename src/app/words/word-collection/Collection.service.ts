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

  deleteCollection(item) {
    collectionsMock.splice(collectionsMock.indexOf(item), 1);
    this.getCollections();
  }




}
