import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent {
  @Input() label: string;
}
