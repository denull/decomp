import AppShell from '../src/lib/components/AppShell.svelte';

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
      defaultValue: 'default',
      toolbar: {
        icon: 'paintbrush',
        title: 'Theme',
        items: [
          /*{ value: 'semiflat', title: 'Semi-Flat' },
          { value: 'ios', title: 'iOS / macOS' },
          { value: 'android', title: 'Android' },
          { value: 'windows', title: 'Windows' },
          { value: 'skeuo', title: 'Skeuomorphic' },*/
          { value: 'default', title: 'Default' },
          { value: 'apple', title: 'Apple' },
          { value: 'win98', title: 'Win98' },
          { value: 'aqua', title: 'Aqua' },
        ],
        dynamicTitle: true,
      },
    },
    scheme: {
      name: 'Color Scheme',
      defaultValue: null,
      toolbar: {
        icon: 'sun',
        title: 'Scheme',
        items: [
          { value: null, title: 'Default' },
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
          /*{ value: 'hc-light', title: 'HC Light' },
          { value: 'hc-dark', title: 'HC Dark' },*/
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (storyFn, context) => ({
      Component: AppShell,
      props: {
        theme: context.globals.theme,
        scheme: context.globals.scheme,
      },
    }),
  ],
};

export default preview;
