import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { BaseComponent } from '../../shared/components/base.component';

@Component({
  selector: 'lib-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent extends BaseComponent implements OnChanges {

  @Input() collection: any[];

  @Output() $paginate = new EventEmitter<any>();

  public options = [
    { label: '10', value: 10 },
    { label: '20', value: 20 },
    { label: '30', value: 30 }
  ];
  public itemsPerPage = 10;
  public activePage = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['collection']) {
      const config = window.localStorage.getItem('default-items-per-page');

      if (config) {
        this.itemsPerPage = parseInt(config, 10);
      }

      this.activePage = 0;

      this.paginateCollection();
    }
  }

  public get totalPages(): number {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  public get buttonsToShow(): any[] {
    const end = this.activePage > 2 ? this.activePage + 3 : 5;
    let start = this.activePage > 2 ? this.activePage - 2 : 0;

    if (start > Math.max(this.totalPages - 5, 0)) {
      start = this.totalPages - 5;
    }

    return [ ...Array(this.totalPages).keys() ].slice(start, end);
  }

  public get showFrom(): number {
    const value = this.activePage * this.itemsPerPage;

    return value > 0 ? value : 1;
  }

  public get showUntil(): number {
    const value = this.activePage * this.itemsPerPage + this.itemsPerPage;

    return value > this.collection.length ? this.collection.length : value;
  }

  public changeItemsPerPage(item: any): void {
    this.itemsPerPage = item.value;

    window.localStorage.setItem('default-items-per-page', item.value);

    if (this.totalPages < this.activePage) {
      this.changePage(this.totalPages - 1);

      return;
    }

    this.paginateCollection();
  }

  public changePage(page: number): void {
    this.activePage = page;

    this.paginateCollection();
  }

  public nextPage(): void {
    this.activePage ++;

    this.paginateCollection();
  }

  public previousPage(): void {
    this.activePage --;

    this.paginateCollection();
  }

  public paginateCollection(): void {
    const paginated = this.collection.slice(this.activePage * this.itemsPerPage, this.activePage * this.itemsPerPage + this.itemsPerPage);

    this.$paginate.emit(paginated);
  }
}
