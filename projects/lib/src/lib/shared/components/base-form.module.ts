import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaseFormComponent } from './base-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BaseFormComponent
  ],
  exports: [
    BaseFormComponent
  ]
})
export class BaseFormModule { }
