import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGroupComponent } from './card-group.component';
import { By } from '@angular/platform-browser';

describe('CardGroupComponent', () => {
  let component: CardGroupComponent;
  let fixture: ComponentFixture<CardGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGroupComponent);
    component = fixture.componentInstance;

    component.label = 'Test title';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should shows card group title', () => {
    const title = fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(title.innerText).toBe('Test title');
  });
});
