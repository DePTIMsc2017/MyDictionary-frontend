import { Component, OnInit } from '@angular/core';
import {CollectionsService} from './Collection.service';


import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
/*
import {AddEditNewsComponent} from '../add-edit-news/add-edit-news.component';
import {NewsService} from '../news.service';
import {AuthService} from '../../services/auth.service';
import {ViewNewsComponent} from '../view-news/view-news.component';
import {TranslateService} from 'ng2-translate';
import {ConfirmModalComponent} from '../../shared/components/confirm-modal.component';
import { BaseItemList } from '../list/base-item-list.class';
*/
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
    //this.textSize = this.getTextSize(window.innerWidth);
  }

  /*
  onAddNews() {
    const modalRef = this.modalService.open(AddEditNewsComponent, {size: 'lg'});
    modalRef.componentInstance.userName = this.authService.getCurrentUserName();
  }
  */

  onItemClicked(item) {
    console.log(item);
    //const modalRef = this.modalService.open(ViewNewsComponent, {size: 'lg'});
    //modalRef.componentInstance.newsItem = item;
    //this.newsService.markAsRead(item, this.authService.getCurrentUserName());
  }

  /*
  onItemEdit() {
    const modalRef = this.modalService.open(AddEditNewsComponent, {size: 'lg'});
    modalRef.componentInstance.newsItem = this.actualSelected;
    modalRef.componentInstance.userName = this.authService.getCurrentUserName();
    this.actualSelected = {};
  }

  onItemDelete() {
    this.translate.get('news.deleteSure', { name: this.actualSelected.name })
      .subscribe(res => {
        const modalRef = this.modalService.open(ConfirmModalComponent);
        modalRef.componentInstance.message = res;

        modalRef.result
          .then(d => {
            this.newsService.deleteNews(this.actualSelected);
            this.actualSelected = {};
          })
          .catch(error => {});
      });
  }

  onLoadMore() {
    this.newsService.loadMoreNews();
  }
  */
}
