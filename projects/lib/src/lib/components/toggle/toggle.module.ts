import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToggleComponent } from './toggle.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ToggleComponent,
  ],
  exports: [
    ToggleComponent
  ]
})
export class ToggleModule { }
