import { storiesOf } from '@storybook/angular';
import { text, boolean, select, withKnobs } from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';

import { ChipComponent } from './chip.component';
import readme from './README.md';

const stories = storiesOf('Chip', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('default', () => ({
  component: ChipComponent,
  moduleMetadata: {
    declarations: [ChipComponent],
  },
  props: {
    label: text('Label', 'Chip Label'),
  },
  template: `
    <lib-chip
      [label]="label"
    >
    </lib-chip>
    `
}),
{
  notes: { markdown: readme },
})
.add('with remove', () => ({
  component: ChipComponent,
  moduleMetadata: {
    declarations: [ChipComponent],
  },
  props: {
    label: text('Label', 'Chip Label'),
    remove: text('Remove option', 'Parameter'),
  },
  template: `
    <lib-chip
      [label]="label"
      [remove]="remove"
    >
    </lib-chip>
    `
}),
{
  notes: { markdown: readme },
})
.add('small', () => ({
  component: ChipComponent,
  moduleMetadata: {
    declarations: [ChipComponent],
  },
  props: {
    label: text('Label', 'Chip Label'),
  },
  template: `
    <lib-chip
      [label]="label"
      [small]="true"
    >
    </lib-chip>
    `
}),
{
  notes: { markdown: readme },
});
