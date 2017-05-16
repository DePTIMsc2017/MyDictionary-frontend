import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'wordCollection-item',
  templateUrl: './word-collection-item.component.html',
  styleUrls: ['./word-collection-item.component.css']
})
export class wordCollectionItemComponent {
  @Input() wordCollection;
  @Input() pluscard: boolean=false;
  @Output() clicked = new EventEmitter<any>();
  @Output() plusClicked = new EventEmitter<any>();

  constructor() {}

  onClick($event) {
    console.log($event);
    if($event === -1)
      this.plusClicked.emit();
    else this.clicked.emit();
  }


}
