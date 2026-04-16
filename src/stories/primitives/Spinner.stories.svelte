<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Spinner from '$lib/components/Spinner.svelte';

  const { Story } = defineMeta({
    title: 'Primitives/Spinner',
    component: Spinner,
    tags: ['autodocs'],
    argTypes: {
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg'],
      },
    },
  });
</script>

<Story name="Default" args={{}} />

<Story name="With Label" args={{ label: 'Loading data…' }} />

<Story name="Sizes">
  {#snippet template()}
    <div style="display: flex; align-items: center; gap: 24px;">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  {/snippet}
</Story>

<Story name="With Labels">
  {#snippet template()}
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <Spinner size="sm" label="Small" />
      <Spinner size="md" label="Medium" />
      <Spinner size="lg" label="Large" />
    </div>
  {/snippet}
</Story>
