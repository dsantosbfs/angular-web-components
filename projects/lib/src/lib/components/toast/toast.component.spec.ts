import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ToastComponent } from './toast.component';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;

    component.message = 'Toast Test';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sends close event when click on button', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    component.$close.subscribe(data => {
      expect(data).toBe(undefined);
    });

    button.click();
  });

  it('should checks success icon', () => {
    component.type = 'success';

    fixture.detectChanges();

    expect(component.getIcon).toBe('fa-check');
  });

  it('should checks error icon', () => {
    component.type = 'error';

    fixture.detectChanges();

    expect(component.getIcon).toBe('fa-times');
  });

  it('should checks warning icon', () => {
    component.type = 'warning';

    fixture.detectChanges();

    expect(component.getIcon).toBe('fa-exclamation-triangle');
  });

  it('should closes toast automaticaly', (done) => {
    component.show = true;

    fixture.detectChanges();

    component.ngOnChanges({show: true} as any);

    setTimeout(() => {
      fixture.detectChanges();

      expect(component.show).toBeFalsy();
      done();
    }, 3001);
  });

  it('should not closes toast automaticaly', () => {
    const closeSpy = spyOn(component, 'close');

    component.show = false;

    fixture.detectChanges();

    component.ngOnChanges({show: false} as any);

    expect(closeSpy).not.toHaveBeenCalled();
  });
});
