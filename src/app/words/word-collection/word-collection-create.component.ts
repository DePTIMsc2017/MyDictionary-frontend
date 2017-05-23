import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {CollectionsService} from './Collection.service';

@Component({
  selector: 'create-word-collection',
  templateUrl: './word-collection-create.component.html'
})
export class CreateWordCollectionComponent {
  private description: string = "";
  private name: string ="";

  constructor(private activeModal: NgbActiveModal,private collectionService: CollectionsService) {
  }

  onSubmit(){
    this.collectionService.createCollection(this.name);
    this.activeModal.dismiss();
  }

}
