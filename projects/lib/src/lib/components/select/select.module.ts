import { BaseFormModule } from '../../shared/components/base-form.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SelectComponent } from './select.component';
import { BaseModule } from '../../shared/components/base.module';

@NgModule({
  imports: [
    BaseFormModule,
    BaseModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    SelectComponent
  ],
  exports: [
    SelectComponent
  ]
})
export class SelectModule { }
