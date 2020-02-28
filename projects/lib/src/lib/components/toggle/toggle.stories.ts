import { storiesOf } from '@storybook/angular';
import { text, boolean, withKnobs } from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';

import { ToggleComponent } from './toggle.component';
import readme from './README.md';
import { SelectModule } from '../select/select.module';

const stories = storiesOf('Toggle', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('default', () => ({
  component: ToggleComponent,
  moduleMetadata: {
    imports: [SelectModule],
    declarations: [ToggleComponent],
  },
  props: {
    label: text('Label', 'Teste'),
    disabled: boolean('Disabled', false),
    checked: boolean('Checked', false),
  },
  template: `
    <lib-toggle
      [label]="label"
      [disabled]="disabled"
      [checked]="checked"
    >
    </lib-toggle>
    `
}),
{
  notes: { markdown: readme },
});
