import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {CollectionsService} from "../../words/word-collection/Collection.service";
import {Word} from "../models/word.model";

@Component({
  selector: 'edit-word-component',
  templateUrl: './edit-word.component.html'
})
export class EditWordComponent {
  private enableModify:boolean;
  private meaning:Word;
  private word:Word;
  constructor(private activeModal: NgbActiveModal, private collectionsService:CollectionsService) {
  }

  onSubmit(values){
    if(values.gender === "cut")
    {   //this.word.wordMeaning1 = []
        this.collectionsService.moveWord(this.word.id,this.meaning.id,values.colselect);
    }
    else
    this.activeModal.dismiss();
  }


}
