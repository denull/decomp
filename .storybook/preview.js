import ThemeDecorator from '../src/stories/ThemeDecorator.svelte';

/** @type { import('@storybook/svelte-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    layout: 'centered',
  },

  globalTypes: {
    theme: {
      name: 'Theme',
      defaultValue: 'semiflat',
      toolbar: {
        icon: 'paintbrush',
        title: 'Theme',
        items: [
          { value: 'semiflat', title: 'Semi-Flat' },
          { value: 'ios', title: 'iOS / macOS' },
          { value: 'android', title: 'Android' },
          { value: 'windows', title: 'Windows' },
          { value: 'skeuo', title: 'Skeuomorphic' },
          { value: 'win98', title: 'Win98' },
        ],
        dynamicTitle: true,
      },
    },
    scheme: {
      name: 'Color Scheme',
      defaultValue: 'day',
      toolbar: {
        icon: 'sun',
        title: 'Scheme',
        items: [
          { value: 'day', title: 'Day' },
          { value: 'night', title: 'Night' },
          { value: 'hc-day', title: 'HC Day' },
          { value: 'hc-night', title: 'HC Night' },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (storyFn, context) => ({
      Component: ThemeDecorator,
      props: {
        globals: context.globals,
      },
    }),
  ],
};

export default preview;
