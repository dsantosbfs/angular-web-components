import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaseModule } from '../../shared/components/base.module';
import { ToastComponent } from './toast.component';

@NgModule({
  imports: [
    CommonModule,
    BaseModule
  ],
  declarations: [
    ToastComponent,
  ],
  exports: [
    ToastComponent
  ]
})
export class ToastModule { }
