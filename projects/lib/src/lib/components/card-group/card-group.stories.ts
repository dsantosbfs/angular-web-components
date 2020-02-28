import { storiesOf } from '@storybook/angular';
import { text, withKnobs } from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';

import { CardGroupComponent } from './card-group.component';

import readme from './README.md';
import { ButtonModule } from '../button/button.module';

const stories = storiesOf('Card Group', module);

stories.addDecorator(withKnobs);
// stories.addDecorator(centered);

stories.add('default', () => ({
  component: CardGroupComponent,
  moduleMetadata: {
    imports: [ButtonModule],
    declarations: [CardGroupComponent],
  },
  props: {
   label: text('Title', 'Card Group Title'),
  },
  template: `
    <lib-card-group
      [label]="label"
    >
      <div header>
        <lib-button
          label="Example Button Label"
        >
        </lib-button>
      </div>
      <div body>
        Example of card group content
      </div>
    </lib-card-group>
    `
}),
{
  notes: { markdown: readme },
});
