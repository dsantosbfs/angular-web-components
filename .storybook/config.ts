import { configure, addDecorator } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';

function loadStories() {
  const req = require.context('../', true, /\.stories\.ts$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

addDecorator(withA11y)
