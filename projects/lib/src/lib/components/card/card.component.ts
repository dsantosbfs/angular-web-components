import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../shared/components/base.component';
import { CardInterface } from './card.interface';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent extends BaseComponent {
  @Input() data: CardInterface;
  @Input() status = 'normal';
  @Input() type = 'default';
  @Input() loading = false;
  @Input() disable = false;
  @Input() disableMessage: string;

  get isCardDefault(): boolean {
    return this.type === 'default';
  }
}
