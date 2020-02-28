import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  @Input() label: any;
  @Input() remove: any;
  @Input() small: boolean;

  @Output() $onRemove: EventEmitter<any> = new EventEmitter();

  public onClick(): void {
    this.$onRemove.emit(this.remove);
  }
}
