import { Component, OnInit } from '@angular/core';
import {CollectionsService} from './Collection.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Word} from "../../shared/models/word.model";
import {CreateWordCollectionComponent} from "./word-collection-create.component";

@Component({
  selector: 'wordCollection-list',
  templateUrl: './word-collection-list.component.html'
})
export class wordCollectionListComponent implements OnInit {
  col: Array<Word>;

  constructor(
    private modalService: NgbModal,
    private collectionsService: CollectionsService,
  ) {
  }

  ngOnInit() {
    this.collectionsService.getCollections();
    this.col = new Array();
  }

  onItemClicked(item) {
    //console.log(item);
    this.col =  this.collectionsService.getWords(item);
    console.log(this.col);
  }

  onDelete(words){
    console.log(words.array[0].id+"  AbBA");
    words.array.forEach(word => this.collectionsService.deleteWord(word.id));
  }

  onApproved(words)
  {
    console.log(words);

  }

  onPlusCard(){
    console.log("Plus card!");
    const ref = this.modalService.open(CreateWordCollectionComponent, {size: 'lg'});
  }

}
