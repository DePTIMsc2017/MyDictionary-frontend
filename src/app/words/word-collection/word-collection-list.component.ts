import { Component, OnInit } from '@angular/core';
import {CollectionsService} from './Collection.service';


import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'wordCollection-list',
  templateUrl: './word-collection-list.component.html'
})
export class wordCollectionListComponent implements OnInit {


  constructor(
    private modalService: NgbModal,
    private collectionsService: CollectionsService,
  ) {
  }

  ngOnInit() {
    this.collectionsService.getCollections();

  }



  onItemClicked(item) {
    console.log(item);

  }


}
