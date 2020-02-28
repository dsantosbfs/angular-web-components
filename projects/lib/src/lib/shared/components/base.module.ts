import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaseComponent } from './base.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BaseComponent
  ],
  exports: [
    BaseComponent
  ]
})
export class BaseModule { }
