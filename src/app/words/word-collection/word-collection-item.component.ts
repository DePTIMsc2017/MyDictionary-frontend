import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'wordCollection-item',
  templateUrl: './word-collection-item.component.html',
  styleUrls: ['./word-collection-item.component.css']
})
export class wordCollectionItemComponent {
  @Input() wordCollection;
  @Output() clicked = new EventEmitter<any>();

  constructor() {}

  onClick($event) {
    console.log($event);
    this.clicked.emit();
  }


}
