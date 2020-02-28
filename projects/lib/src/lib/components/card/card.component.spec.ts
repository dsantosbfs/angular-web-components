import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CardComponent } from './card.component';
import { HelperModule } from '../helper/helper.module';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HelperModule ],
      declarations: [ CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    component.data = {
      title: 'Test Title',
      description: 'Test description',
      number: 2,
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should is card default', () => {
    expect(component.isCardDefault).toBeTruthy();
  });

  it('should is not card default', () => {
    component.type = 'big-number';

    expect(component.isCardDefault).toBeFalsy();
  });

  it('should displays title', () => {
    const test = fixture.debugElement.query(By.css('h4')).nativeElement;

    expect(test.innerText).toBe('Test Title');
  });

  it('should displays description', () => {
    const test = fixture.debugElement.query(By.css('.description')).nativeElement;

    expect(test.innerText).toBe('Test description');
  });

  it('should display number in big-number layout', () => {
    component.type = 'big-number';

    fixture.detectChanges();

    const test = fixture.debugElement.query(By.css('.bigger')).nativeElement;

    expect(test.innerText).toBe('2');
  });
});
