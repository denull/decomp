<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Switch from '$lib/components/Switch.svelte';

  const { Story } = defineMeta({
    title: 'Primitives/Switch',
    component: Switch,
    tags: ['autodocs'],
    argTypes: {
      checked: { control: 'boolean' },
    },
  });
</script>

<Story name="Default" args={{ label: 'Active status' }} />

<Story name="Checked" args={{ label: 'Notifications enabled', checked: true }} />

<Story name="No Label" args={{}} />

<Story name="Settings List">
  {#snippet template()}
    <div style="display: flex; flex-direction: column; gap: 12px; width: 280px;">
      <Switch label="Wi-Fi" checked />
      <Switch label="Bluetooth" />
      <Switch label="Airplane mode" />
      <Switch label="Do not disturb" checked />
      <Switch label="Low power mode" />
    </div>
  {/snippet}
</Story>
