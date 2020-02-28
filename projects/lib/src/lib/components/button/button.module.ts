import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaseModule } from '../../shared/components/base.module';
import { ButtonComponent } from './button.component';

@NgModule({
  imports: [
    CommonModule,
    BaseModule
  ],
  declarations: [
    ButtonComponent,
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule {}
