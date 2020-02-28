import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { TabsComponent } from './tabs.component';

@Component({
  selector: 'lib-test',
  template: `
    <lib-tabs
      [data]="dataTest"
    >
    <div id="tab1Content">
      Tab 1 content
    </div>
    <div id="tab2Content">
      Tab 2 content
    </div>
    </lib-tabs>
  `
})
class TestComponent {}

describe('TabsComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsComponent, TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    component['dataTest'] = [
      { label: 'Tab 1', id: 'tab1Content', active: true },
      { label: 'Tab 2', id: 'tab2Content' }
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should gets actived tab', () => {
    const tab = fixture.debugElement.query(By.css('.active')).nativeElement;

    expect(tab.innerText).toBe('Tab 1');
  });

  it('should gets actived tab content', () => {
    const div = fixture.debugElement.query(By.css('.lib-tabs__content div')).nativeElement;

    expect(div.innerText).toBe('Tab 1 content');
  });

  it('should changes tab', () => {
    const tab = fixture.debugElement.query(By.css('.lib-tabs__header li:last-of-type a')).nativeElement;
    let div = fixture.debugElement.query(By.css('.lib-tabs__content .active')).nativeElement;

    tab.click();

    fixture.detectChanges();

    expect(div.innerText).toBe(' Tab 1 content ');

    const activeTab = fixture.debugElement.query(By.css('.active')).nativeElement;
    div = fixture.debugElement.query(By.css('.lib-tabs__content .active')).nativeElement;

    expect(activeTab.innerText).toBe('Tab 2');
    expect(div.innerText).toBe('Tab 2 content');
  });

  it('should sets first tab as active when this is not defined', () => {
    component['dataTest'] = [{ label: 'Tab 1', id: 'tab1Content' }, { label: 'Tab 2', id: 'tab2Content' }];

    fixture.detectChanges();

    const div = fixture.debugElement.query(By.css('.lib-tabs__content .active')).nativeElement;

    expect(div.innerText).toBe('Tab 1 content');
  });
});
