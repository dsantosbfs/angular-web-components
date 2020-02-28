import { storiesOf } from '@storybook/angular';
import { text, withKnobs } from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';

import { HelperComponent } from './helper.component';

import readme from './README.md';

const stories = storiesOf('Helper', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('default', () => ({
  component: HelperComponent,
  moduleMetadata: {
    declarations: [HelperComponent],
  },
  props: {
   text: text('Text', 'Isso é um exemplo de como o usuário pode entender melhor uma funcionálidade'),
   content: text('Content', null)
  },
  template: `
    <lib-helper
      [text]="text"
    >
      {{content}}
    </lib-helper>
    `
}),
{
  notes: { markdown: readme },
});
