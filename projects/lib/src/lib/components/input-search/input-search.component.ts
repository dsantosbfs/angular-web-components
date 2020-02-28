import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { BaseComponent } from '../../shared/components/base.component';

@Component({
  selector: 'lib-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent extends BaseComponent {
  @Input() placeholder = 'Buscar';

  @Output() $search: EventEmitter<any> = new EventEmitter();

  private debouncer: Subject<any> = new Subject();

  public value = '';
  public showClearButton: boolean;

  constructor() {
    super();

    this.debouncer.pipe(debounceTime(500))
      .subscribe((value) => this.$search.emit(value));
  }

  public onKeyup(): void {
    this.showClearButton = this.value ? true : false;

    this.debouncer.next(this.value);
  }

  public clearField(): void {
    this.value = '';

    this.onKeyup();
  }
}
