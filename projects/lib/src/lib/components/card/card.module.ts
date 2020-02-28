import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaseModule } from '../../shared/components/base.module';
import { CardComponent } from './card.component';
import { HelperModule } from '../helper/helper.module';

@NgModule({
  imports: [
    CommonModule,
    HelperModule,
    BaseModule
  ],
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
