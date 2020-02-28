import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardGroupComponent } from './card-group.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CardGroupComponent
  ],
  exports: [
    CardGroupComponent
  ]
})
export class CardGroupModule { }
