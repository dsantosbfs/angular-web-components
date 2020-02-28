import { Component, Input, Output, EventEmitter } from '@angular/core';

import { BaseFormComponent } from '../../shared/components/base-form.component';

@Component({
  selector: 'lib-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent extends BaseFormComponent {
  @Input() disabled: boolean;
  @Input() label: string;
  @Input() value: any;
  @Input() checked: boolean;

  @Output() $onChange = new EventEmitter<any>();

  public onChange($event): void {
    const element = $event.target;

    this.$onChange.emit({
      checked: element.checked,
      value: this.value
    });
  }
}
