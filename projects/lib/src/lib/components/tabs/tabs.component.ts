import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../shared/components/base.component';

@Component({
  selector: 'lib-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent extends BaseComponent {
  @Input() set data(data) {
    this.collection = data;

    const activeItem = data.filter((item) => item.active);

    this.activeTab(activeItem[0] || data[0]);
  }

  public collection: any[];

  public changeTab($event, item): void {
    $event.stopPropagation();

    this.activeTab(item);
  }

  public activeTab(item): void {
    this.collection.map(tab => tab.active = false);

    item.active = true;

    this.hideTabContents();

    document.getElementById(item.id).className = 'active';
  }

  public hideTabContents() {
    const contents = document.querySelectorAll('.lib-tabs__content > div');

    contents.forEach(item => {
      item.removeAttribute('class');
    });
  }
}
