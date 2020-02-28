import { storiesOf } from '@storybook/angular';
import { text, boolean, select, withKnobs, number } from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';

import { ToastComponent } from './toast.component';
import readme from './README.md';

const stories = storiesOf('Toast', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('default', () => ({
  component: ToastComponent,
  moduleMetadata: {
    declarations: [ToastComponent],
  },
  props: {
    message: text('Message', 'Toast created successfuly'),
    type: select('Type', {
      Success: 'success',
      Error: 'error',
      Warning: 'warning',
    }, 'success'),
    timer: number('Timer to Close', 3),
    show: boolean('Show', true)
  },
  template: `
    <lib-toast
      [message]="message"
      [type]="type"
      [timer]="timer"
      [show]="show"
    >
    </lib-toast>
    `
}),
{
  notes: { markdown: readme },
});
