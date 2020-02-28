import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { BaseComponent } from '../../../lib/src/lib/shared/components/base.component';
import { ButtonComponent } from '../../../lib/src/lib/components/button/button.component';
import { HelperComponent } from '../../../lib/src/lib/components/helper/helper.component';
import { ToggleComponent } from '../../../lib/src/lib/components/toggle/toggle.component';
import { BaseFormComponent } from '../../../lib/src/lib/shared/components/base-form.component';

@NgModule({
  declarations: [
    ButtonComponent,
    BaseComponent,
    BaseFormComponent,
    HelperComponent,
    ToggleComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    ButtonComponent,
    HelperComponent,
    ToggleComponent,
  ]
})
export class AppModule {
  private components = [
    /*
    {
      class: ButtonComponent,
      tagName: 'ds-button'
    },
    */
    {
      class: HelperComponent,
      tagName: 'ds-helper'
    },
    /*
    {
      class: ToggleComponent,
      tagName: 'ds-toggle'
    }
    */
  ];

  constructor(readonly injector: Injector) {
    this.components.forEach((component) => {
      const ngElement = createCustomElement(component.class, {
        injector,
      });

      customElements.define(component.tagName, ngElement);
    });
  }

  ngDoBootstrap() {}
 }
