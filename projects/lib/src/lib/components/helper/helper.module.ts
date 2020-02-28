import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HelperComponent } from './helper.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HelperComponent
  ],
  exports: [
    HelperComponent
  ]
})
export class HelperModule { }
