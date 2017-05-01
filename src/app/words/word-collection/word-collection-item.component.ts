import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'wordCollection-item',
  templateUrl: './word-collection-item.component.html',
  styleUrls: ['./word-collection-item.component.css']
})
export class wordCollectionItemComponent {
  @Input() wordCollection;

  constructor() {}

  onClick($event) {
    console.log($event);
    /*
    if (this.editable) {
      let canActivate = true;
      if ($event !== undefined) {
        $event.path.forEach(item => {
          if (item.id === 'mmCheckbox') {
            canActivate = false;
            return;
          }
        });
      }

      if (canActivate) {
        this.clicked.emit();
      }
    } else {
      this.clicked.emit();
    }
    */
  }

  onSelected(): void {
    //this.selected.emit();
  }
}
