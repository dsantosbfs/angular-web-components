import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaseModule } from '../../shared/components/base.module';
import { PaginationComponent } from './pagination.component';
import { SelectComponent } from '../select/select.component';
import { SelectModule } from '../select/select.module';

@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    SelectModule
  ],
  declarations: [
    PaginationComponent,
  ],
  exports: [
    PaginationComponent
  ]
})
export class PaginationModule { }
