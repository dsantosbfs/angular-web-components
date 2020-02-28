import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BaseModule } from '../../shared/components/base.module';
import { InputSearchComponent } from './input-search.component';

@NgModule({
  imports: [
    BaseModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    InputSearchComponent
  ],
  exports: [
    InputSearchComponent
  ]
})
export class InputSearchModule { }
