import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFormComponent } from './base-form.component';

describe('BaseFormComponent', () => {
  let component: BaseFormComponent;
  let fixture: ComponentFixture<BaseFormComponent>;

  const mockTouchedFn = jasmine.createSpy('onTouched');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sets innerValue', () => {
    component.innerValue = 'Test';

    expect(component['parsedInnerValue']).toEqual('Test');

    component.innerValue = 'Test';

    expect(component.innerValue).toBe('Test');
  });

  it('should checks if is disabled', () => {
    expect(component.isDisabled).toBeFalsy();
  });

  it('should writes value', () => {
    const onChangeSpy = spyOn(component as any, '_onChange');

    component.writeValue('Write value test');

    expect(onChangeSpy).toHaveBeenCalled();

    component.writeValue('Write value test');

    expect(component.innerValue).toBe('Write value test');
  });

  it('should sets disabled state', () => {
    component.setDisabledState(true);

    expect(component.isDisabled).toBeTruthy();
  });

  it('should calls ontouched on blur', () => {
    const onTouchedSpy = spyOn(component as any, '_onTouched');

    component.onBlur();

    expect(onTouchedSpy).toHaveBeenCalled();
  });

  it('should register onChange', () => {
    component.registerOnChange('test');

    expect(component['_onChange']).toBe('test');
  });

  it('should register onTouched', () => {
    component.registerOnTouched('test');

    expect(component['_onTouched']).toBe('test');
  });

  it('should calls onTouched callback', () => {
    component.registerOnTouched(mockTouchedFn);

    component['_onTouched']();

    expect(mockTouchedFn).toHaveBeenCalled();
  });
});
