import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const MyStory = () => <div />;
MyStory.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
};
