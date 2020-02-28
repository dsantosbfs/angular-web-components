import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { InputSearchComponent } from './input-search.component';

describe('InputSearchComponent', () => {
  let component: InputSearchComponent;
  let fixture: ComponentFixture<InputSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ InputSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emits search event', fakeAsync(() => {
    component.$search.subscribe(data => {
      expect(data).toBe('input search test');
    });

    component.value = 'input search test';

    component.onKeyup();

    tick(500);
  }));

  it('should clear field value', () => {
    component.value = 'test';
    component.showClearButton = true;

    component.clearField();

    fixture.detectChanges();

    expect(component.value).toBe('');
    expect(component.showClearButton).toBeFalsy();
  });
});
