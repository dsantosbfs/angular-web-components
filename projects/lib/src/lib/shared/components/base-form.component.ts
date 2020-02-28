import {
  Component,
  forwardRef,
  Renderer2
} from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseComponent } from './base.component';

@Component({
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BaseFormComponent),
    multi: true
  }],
  template: ''
})
export class BaseFormComponent extends BaseComponent implements ControlValueAccessor {

  protected parsedInnerValue = null;
  protected flagIsDisabled = false;

  protected _onChange(fn: any) {}
  protected _onTouched() {}

  get innerValue() {
    return this.parsedInnerValue;
  }

  set innerValue(value) {
    if (value !== this.parsedInnerValue) {
      this.parsedInnerValue = value;
      this._onChange(value);
    }
  }

  get isDisabled(): boolean {
    return this.flagIsDisabled;
  }

  onBlur(): void {
    this._onTouched();
  }

  writeValue(value: any): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.flagIsDisabled = isDisabled;
  }
}
