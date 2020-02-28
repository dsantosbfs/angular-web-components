import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChipComponent } from './chip.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ChipComponent
  ],
  exports: [
    ChipComponent
  ]
})
export class ChipModule { }
