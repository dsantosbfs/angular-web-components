import { storiesOf } from '@storybook/angular';
import { object, withKnobs } from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';

import { PaginationComponent } from './pagination.component';
import readme from './README.md';
import { SelectModule } from '../select/select.module';

const stories = storiesOf('Pagination', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('default', () => ({
  component: PaginationComponent,
  moduleMetadata: {
    imports: [SelectModule],
    declarations: [PaginationComponent],
  },
  props: {
    collection: object('Collection', new Array(178).fill(''))
  },
  template: `
    <lib-pagination
      [collection]="collection"
    >
    </lib-pagination>
    `
}),
{
  notes: { markdown: readme },
});
