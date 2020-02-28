import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { BaseComponent } from '../../shared/components/base.component';

@Component({
  selector: 'lib-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent extends BaseComponent implements OnChanges {
  @Input() message: string;
  @Input() type = 'success';
  @Input() timer = 3;
  @Input() show: boolean;

  @Output() $close: EventEmitter<any> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.show) {
      setTimeout(() => {
        this.close();
      }, this.timer * 1000);
    }
  }

  public get getIcon(): string {
    if (this.type === 'error') {
      return 'fa-times';
    }

    if (this.type === 'success') {
      return 'fa-check';
    }

    return 'fa-exclamation-triangle';
  }

  public close(): void {
    this.show = false;
    this.$close.emit();
  }
}
