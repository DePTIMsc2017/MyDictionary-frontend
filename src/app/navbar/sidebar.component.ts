import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() showItEvent: EventEmitter<boolean> = new EventEmitter();

  private _showIt: boolean = false;

  constructor() { }

  ngOnInit() {
    if (window.innerWidth > 767) {
      this._showIt = true;
      this.showItEvent.emit(this._showIt);
    }
  }

  onShow(): void {
    this._showIt = !this._showIt;
    this.showItEvent.emit(this._showIt);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const last = this._showIt;
    if (event.target.innerWidth > 767) {
      this._showIt = true;
    } else {
      this._showIt = false;
    }

    if (this._showIt !== last) {
      this.showItEvent.emit(this._showIt);
    }
  }

}
