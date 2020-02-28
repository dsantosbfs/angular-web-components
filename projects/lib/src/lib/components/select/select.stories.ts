import { SelectModule } from './select.module';
import { storiesOf } from '@storybook/angular';
import { text, object, withKnobs, boolean } from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';

import { SelectComponent } from './select.component';

import readme from './README.md';

const stories = storiesOf('Select', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('default', () => ({
  component: SelectComponent,
  props: {
   label: text('Label', 'Select Menu'),
   data: object('Data', [
      { value: null, label: 'sample 1' },
      { value: 2, label: 'sample 2' },
      { value: 3, label: 'sample 3' }
    ]),
    disabled: boolean('Disabled', false)
  },
  template: `
    <lib-select
      [label]="label"
      [data]="data"
      [disabled]="disabled"
      [defaultValue]="null"
    >
    </lib-select>
    `
}),
{
  notes: { markdown: readme },
});
