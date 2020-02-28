import { storiesOf } from '@storybook/angular';
import { text, object, withKnobs, select, boolean } from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';

import { CardComponent } from './card.component';

import readme from './README.md';
import { HelperComponent } from '../helper/helper.component';

const stories = storiesOf('Card', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('default', () => ({
  component: CardComponent,
  moduleMetadata: {
    declarations: [CardComponent, HelperComponent],
  },
  props: {
   data: object('Data', {
      title: 'Perfil de acompanhamento laboratorial',
      description: 'Mai. 2019 - Jul. 2019',
      helper: 'Texto de ajuda para o usuário'
    }),
    content: text('Content', 'Conteúdo de teste'),
    loading: boolean('Is Loading', false),
    disable: boolean('Is Disabled', false),
    disableMessage: text('Disabled Message', 'Nada para ver aqui!')
  },
  template: `
    <lib-card
      [data]="data"
      [loading]="loading"
      [disable]="disable"
      [disableMessage]="disableMessage"
    >
      {{content}}
    </lib-card>
    `
}),
{
  notes: { markdown: readme },
});

stories.add('big number', () => ({
  component: CardComponent,
  moduleMetadata: {
    declarations: [CardComponent, HelperComponent],
  },
  props: {
   data: object('Data', {
      title: 'Perfil de acompanhamento laboratorial',
      number: 999,
      helper: 'Texto de ajuda para o usuário'
    }),
    status: select('Status', {
      normal: 'normal',
      warning: 'warning'
    }, 'normal'),
    loading: boolean('Is Loading', false),
  },
  template: `
    <lib-card
      [data]="data"
      [status]="status"
      type="big-number"
      [loading]="loading"
    >
    </lib-card>
    `
}),
{
  notes: { markdown: readme },
});
