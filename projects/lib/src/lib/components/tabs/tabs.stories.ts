import { storiesOf } from '@storybook/angular';
import { object, withKnobs } from '@storybook/addon-knobs';

import { TabsComponent } from './tabs.component';

import readme from './README.md';

const stories = storiesOf('Tabs', module);

stories.addDecorator(withKnobs);

stories.add('default', () => ({
  component: TabsComponent,
  moduleMetadata: {
    declarations: [TabsComponent],
  },
  props: {
    data: object('Tabs', [
      {
        label: 'Tab 1',
        id: 'tab1Content',
        active: true
      },
      {
        label: 'Tab 2',
        id: 'tab2Content'
      },
      {
        label: 'Tab 3',
        id: 'tab3Content'
      },
   ]),
  },
  template: `
    <lib-tabs
      [data]="data"
    >
      <div id="tab1Content">
        Tab 1 content
      </div>
      <div id="tab2Content">
        Tab 2 content
      </div>
      <div id="tab3Content">
        Tab 3 content
      </div>
    </lib-tabs>
    `
}),
{
  notes: { markdown: readme },
});
