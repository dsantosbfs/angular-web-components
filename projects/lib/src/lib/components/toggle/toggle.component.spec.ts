import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ToggleComponent } from './toggle.component';

describe('ToggleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;

    component.label = 'Toggle Test';
    component.value = { test: true };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sends event when change toggle', () => {
    const toggle = fixture.debugElement.query(By.css('label')).nativeElement;

    component.$onChange.subscribe(data => {
      expect(data.checked).toBeTruthy();
    });

    toggle.click();
  });
});
