import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipComponent } from './chip.component';
import { By } from '@angular/platform-browser';

describe('ChipComponent', () => {
  let component: ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;

    component.label = 'Label test';
    component.remove = true;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should shows chip label', () => {
    const label = fixture.debugElement.query(By.css('label')).nativeElement;

    expect(label.innerText).toEqual('Label test');
  });

  it('should clicks to remove chip', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    component.$onRemove.subscribe(data => {
      expect(data).toBeTruthy();
    });

    button.click();
  });

  it('should not show remove button', () => {
    component.remove = null;

    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button'));

    expect(button).toBeFalsy();
  });
});
