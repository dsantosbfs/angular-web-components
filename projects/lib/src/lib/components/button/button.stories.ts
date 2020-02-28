import { storiesOf } from '@storybook/angular';
import { text, boolean, select, withKnobs } from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';

import { ButtonComponent } from './button.component';
import readme from './README.md';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('default', () => ({
  component: ButtonComponent,
  moduleMetadata: {
    declarations: [ButtonComponent],
  },
  props: {
    disabled: boolean('Is Disabled', false),
    label: text('Label', 'Button Label'),
    loading: boolean('Is Loading', false),
    appearence: select('Style', {
      Primary: 'primary',
      Secundary: 'secundary'
    }, 'primary'),
    size: select('Size', {
      Normal: '',
      small: 'small'
    }, '')
  },
  template: `
    <lib-button
      [appearence]="appearence"
      [disabled]="disabled"
      [label]="label"
      [loading]="loading"
      [size]="size"
    >
    </lib-button>
    `
}),
{
  notes: { markdown: readme },
});
