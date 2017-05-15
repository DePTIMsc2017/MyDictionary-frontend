import { Component, OnInit } from '@angular/core';
import {CollectionsService} from './Collection.service';


import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";
import {Word} from "../../shared/models/word.model";


@Component({
  selector: 'wordCollection-list',
  templateUrl: './word-collection-list.component.html'
})
export class wordCollectionListComponent implements OnInit {
  col: Array<Word>;

  constructor(
    private router: Router,
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
    //console.log(this.col);
  }

  onDelete(words){
    console.log(words.array[0].id+"  AbBA");
    words.array.forEach(word => this.collectionsService.deleteWord(word.id));
  }

  onApproved(words)
  {
    console.log(words);

  }

}
