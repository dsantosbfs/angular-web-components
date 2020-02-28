import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SelectComponent } from './select.component';
import { FormsModule } from '@angular/forms';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  let mockItems: any[];
  let mockProcessedItems: any[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;

    component.label = 'Select Test';
    mockItems = [{ value: 1, label: 'test' }, { value: 2, label: 'test' }];
    mockProcessedItems = [
      { value: { value: 1, label: 'test' }, label: 'test', selected: false },
      { value: { value: 2, label: 'test' }, label: 'test', selected: false }
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sets items', () => {
    component.items = mockItems;

    fixture.detectChanges();

    expect(component.items[0].value.value).toEqual(1);
    expect(component.items[0].label).toEqual('test');
    expect(component.items[0].selected).toBeFalsy();
  });

  it('should gets items', () => {
    component.items = mockItems;

    expect(component.items).toEqual(mockProcessedItems);
  });

  it('should writes value', () => {
    component.items = mockItems;
    fixture.detectChanges();

    component.writeValue(mockItems[0]);

    expect(component.innerValue).toEqual(mockItems[0]);

    fixture.detectChanges();

    component.writeValue(mockItems[0]);

    fixture.detectChanges();

    component.writeValue({
      value: 44,
      label: 'test'
    });

    expect(component.items[0].selected).toBeTruthy();
  });

  it('should sets focus false on blur', () => {
    component.onBlur();

    expect(component.focus).toBeFalsy();
  });

  it('should sets focus true on focus', () => {
    const onTouchedSpy = spyOn(component as any, '_onTouched');

    component.onFocus();

    expect(component.focus).toBeTruthy();
    expect(onTouchedSpy).toHaveBeenCalled();
  });

  it('should selects an item', () => {
    const item = {value: 1, label: 'test', selected: false };
    const clearCurrentSelectedSpy = spyOn(component as any, 'clearCurrentSelected');

    component.setSelectedItem(item);

    expect(clearCurrentSelectedSpy).toHaveBeenCalled();
    expect(item.selected).toBeTruthy();
  });

  it('should toggles focus', () => {
    component.onToggle();

    expect(component.focus).toBeTruthy();

    component.onToggle();
  });

  it('should gets active item', () => {
    component.items = mockItems;
    component.activeIndex = 0;

    expect(component.activeItem).toEqual(mockProcessedItems[0]);
  });

  it('should not set default label on ngOnInit', () => {
    component.ngOnInit();

    component.textValue$.subscribe(input => {
      expect(input).toBe('');
    });
  });

  it('should sets items on ngOnChange', () => {
    const setItemsSpy = spyOn(component as any, '_setItems');

    component.ngOnChanges({ data: mockItems } as any);

    expect(setItemsSpy).toHaveBeenCalled();
  });

  it('should not set items on ngOnChange', () => {
    const setItemsSpy = spyOn(component as any, '_setItems');

    component.ngOnChanges({ test: true } as any);

    expect(setItemsSpy).not.toHaveBeenCalled();
  });

  it('should sets active index', () => {
    component.handleHover(2);

    expect(component.activeIndex).toBe(2);
  });

  it('should selects an item', () => {
    component.$onSelect.subscribe(data => {
      expect(data).toEqual(mockItems[0]);
    });
    component.handleClick(mockProcessedItems[0], 0);

    expect(component.activeIndex).toBe(0);
  });

  it('should selects an item on press enter', () => {
    component.items = mockItems;

    component.$onSelect.subscribe(data => {
      expect(data).toEqual(mockItems[0]);
    });

    component.activeIndex = 0;
    component['_handleEnter'](null);
  });

  it('should sets selected item on select open', () => {
    component.items = mockItems;
    component.defaultValue = 1;

    component.onSelectOpen();

    expect(component.items[0].selected).toBeTruthy();
  });

  it('should not set selected item on select open', () => {
    component.items = mockItems;
    component.defaultValue = null;

    component.onSelectOpen();

    expect(component.items[0].selected).toBeFalsy();
  });

  it('should navigates on press arrow down', () => {
    component.items = mockItems;
    component.activeIndex = 0;

    component['_handleArrowDown'](null);

    fixture.detectChanges();

    expect(component.activeIndex).toBe(1);
  });

  it('should not navigates on press arrow down', () => {
    component.items = mockItems;
    component.activeIndex = 1;

    component['_handleArrowDown'](null);

    fixture.detectChanges();

    expect(component.activeIndex).toBe(1);
  });

  it('should navigates on press arrow up', () => {
    component.items = mockItems;
    component.activeIndex = 1;

    component['_handleArrowUp'](null);

    fixture.detectChanges();

    expect(component.activeIndex).toBe(0);
  });

  it('should not navigates on press arrow up', () => {
    component.items = mockItems;
    component.activeIndex = 0;

    component['_handleArrowUp'](null);

    fixture.detectChanges();

    expect(component.activeIndex).toBe(0);
  });

  it('should closes on press esc', fakeAsync(() => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;

    input.focus();

    component['_handleEsc'](null);

    fixture.detectChanges();
    tick(200);

    expect(component.focus).toBeFalsy();
  }));

  it('should not set items', () => {
    component['_setItems']([]);

    expect(component.items).toEqual([]);
  });

  it('should calls esc callback', () => {
    const spy = spyOn(component as any, '_handleEsc');

    component.handleKeyDown({ which: 27, preventDefault: () => {} } as any);

    expect(spy).toHaveBeenCalled();
  });

  it('should calls enter callback', () => {
    const spy = spyOn(component as any, '_handleEnter');

    component.handleKeyDown({ which: 13, preventDefault: () => {} } as any);

    expect(spy).toHaveBeenCalled();
  });

  it('should calls arrow down callback', () => {
    const spy = spyOn(component as any, '_handleArrowDown');

    component.handleKeyDown({ which: 40, preventDefault: () => {} } as any);

    expect(spy).toHaveBeenCalled();
  });

  it('should calls arrow up callback', () => {
    const spy = spyOn(component as any, '_handleArrowUp');

    component.handleKeyDown({ which: 38, preventDefault: () => {} } as any);

    expect(spy).toHaveBeenCalled();
  });

  it('should not calls arrow up callback', () => {
    const spy = spyOn(component as any, '_handleArrowUp');

    component.handleKeyDown({ which: 76, preventDefault: () => {} } as any);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should updates scroll position', () => {
    const mockElement = {
      nativeElement: {
        scrollIntoView: jasmine.createSpy('scrollIntoView'),
      }
    };

    component['_updateScrollPosition'](mockElement);

    expect(mockElement.nativeElement.scrollIntoView).toHaveBeenCalled();
  });

  it('should not set focus when disabled', () => {
    component.disabled = true;

    component.onFocus();

    expect(component.focus).toBeFalsy();
  });
});
