import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

const eventsStub = new BehaviorSubject<Event>(null);
export class RouterStub {
  events = eventsStub;
}

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  const mockActivedRoute = {
    data: {
        subscribe: (fn: (value: any) => void) => fn({
            company: true,
        }),
    },
    params: {
        subscribe: (fn: (value: any) => void) => fn({
            tab: 0,
        }),
    },
    root: {
      children: [1, 2, 3]
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: Router, useClass: RouterStub },
        {
          provide: ActivatedRoute,
          useValue: mockActivedRoute
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dont have previous page', () => {
    component.breadcrumbs = [{ label: 'Test', url: '/test' }];

    expect(component.previousPage).toBe(undefined);
  });

  it('should have previous page', () => {
    component.breadcrumbs = [{ label: 'Previous', url: '/previous' }, { label: 'Test', url: '/test' }];

    expect(component.previousPage.label).toBe('Previous');
  });

  it('should return breadcrumbs when route dosent have children', () => {
    component.breadcrumbs = [{ label: 'Test', url: '/test' }];

    const result = component['getBreadcrumbs']({ children: [] } as any, '', component.breadcrumbs);

    expect(result).toEqual([{ label: 'Test', url: '/test' }]);
  });
});
