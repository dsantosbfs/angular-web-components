import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperComponent } from './helper.component';
import { By } from '@angular/platform-browser';

describe('HelperComponent', () => {
  let component: HelperComponent;
  let fixture: ComponentFixture<HelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperComponent);
    component = fixture.componentInstance;

    component.text = 'Helper test';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should shows helper tooltip', () => {
    const helper = fixture.debugElement.query(By.css('.helper__button')).nativeElement;

    helper.click({
      preventDefault: () => {}
    });

    fixture.detectChanges();

    const tooltip = fixture.debugElement.query(By.css('.helper__tooltip')).nativeElement;

    expect(tooltip.innerText).toBe('Helper test');
  });

  it('should hides helper tooltip on blur', () => {
    component.showHelper = true;

    fixture.detectChanges();

    component.onBlur();

    expect(component.showHelper).toBeFalsy();

    fixture.detectChanges();

    const tooltip = fixture.debugElement.query(By.css('.helper__tooltip'));

    expect(tooltip).toBeNull();
  });

  it('should continues display tooltip when any key is pressed', () => {
    component.showHelper = true;

    fixture.detectChanges();

    component.onKeyup({
      keyCode: 32,
      preventDefault: () => {}
    });

    const tooltip = fixture.debugElement.query(By.css('.helper__tooltip')).nativeElement;

    expect(tooltip.innerText).toBe('Helper test');
  });

  it('should hide tooltip when esc key is pressed', () => {
    component.showHelper = true;

    fixture.detectChanges();

    component.onKeyup({
      keyCode: 27,
      preventDefault: () => {}
    });

    fixture.detectChanges();

    const tooltip = fixture.debugElement.query(By.css('.helper__tooltip'));

    expect(tooltip).toBeNull();
    expect(component.showHelper).toBeFalsy();
  });

  it('should set tooltip left position', () => {
    component.text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

    component.getViewPort = () => {
      return { width: 50, height: 100 };
    };

    const helper = fixture.debugElement.query(By.css('.helper__button')).nativeElement;

    helper.click({
      preventDefault: () => {}
    });

    fixture.detectChanges();

    expect(component.positionClassName).toBe('center');
  });

  it('should not set tooltip size', () => {
    component.tooltipContentElement = null;

    component['setTooltipSize']();

    const helper = fixture.debugElement.query(By.css('.helper__button')).nativeElement;

    helper.click({
      preventDefault: () => {}
    });

    fixture.detectChanges();

    expect(component.tooltipElement.nativeElement.style.width).toBe('');
  });

  it('should not set tooltip position', () => {
    component.tooltipElement = null;

    component['setTooltipPosition']();

    expect(component.positionClassName).toBe('center');
  });
});
