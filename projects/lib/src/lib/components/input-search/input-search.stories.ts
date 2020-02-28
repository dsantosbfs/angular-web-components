import { storiesOf } from '@storybook/angular';
import { text, object, withKnobs } from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';

import { InputSearchComponent } from './input-search.component';

import readme from './README.md';

const stories = storiesOf('Input Search', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('default', () => ({
  component: InputSearchComponent,
  props: {
    placeholder: text('Placeholder', 'Texto para placeholder')
  },
  template: `
    <lib-input-search
      [placeholder]="placeholder"
    >
		</lib-input-search>
		`
}),
{
  notes: { markdown: readme },
});
