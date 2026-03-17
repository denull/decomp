<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Progress from '$lib/components/Progress.svelte';

  const { Story } = defineMeta({
    title: 'Feedback/Progress',
    component: Progress,
    tags: ['autodocs'],
    argTypes: {
      type: {
        control: { type: 'select' },
        options: ['bar', 'spinner'],
      },
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg'],
      },
      value: { control: { type: 'range', min: 0, max: 100 } },
      indeterminate: { control: 'boolean' },
    },
  });
</script>

<Story name="Progress Bar" args={{ type: 'bar', value: 65 }}>
  {#snippet children(args)}
    <div style="width: 300px;">
      <Progress {...args} label="Upload progress" />
    </div>
  {/snippet}
</Story>

<Story name="Indeterminate Bar" args={{ type: 'bar', indeterminate: true }}>
  {#snippet children(args)}
    <div style="width: 300px;">
      <Progress {...args} label="Loading" />
    </div>
  {/snippet}
</Story>

<Story name="Spinner" args={{ type: 'spinner', indeterminate: true }}>
  {#snippet children(args)}
    <div style="display: flex; gap: 24px; align-items: center;">
      <Progress type="spinner" size="sm" indeterminate />
      <Progress type="spinner" size="md" indeterminate />
      <Progress type="spinner" size="lg" indeterminate />
    </div>
  {/snippet}
</Story>

<Story name="Spinner with Progress" args={{ type: 'spinner', value: 72, max: 100 }}>
  {#snippet children(args)}
    <Progress {...args} label="72%" />
  {/snippet}
</Story>

<Story name="Bar Sizes">
  {#snippet children(args)}
    <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
      <Progress type="bar" size="sm" value={40} label="Small" />
      <Progress type="bar" size="md" value={60} label="Medium" />
      <Progress type="bar" size="lg" value={80} label="Large" />
    </div>
  {/snippet}
</Story>
