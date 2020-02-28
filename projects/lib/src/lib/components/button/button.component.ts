import { Component, Input, Output, EventEmitter } from '@angular/core';

import { BaseComponent } from '../../shared/components/base.component';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends BaseComponent {
  @Input() appearence = 'primary';
  @Input() disabled: boolean;
  @Input() label: string;
  @Input() loading: boolean;
  @Input() size = '';
  @Input() type = 'button';

  @Output() $click: EventEmitter<any> = new EventEmitter();

  public onClick($event): void {
    this.$click.emit($event);
  }
}
