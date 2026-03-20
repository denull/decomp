<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Stack from '$lib/components/Stack.svelte';
  import Button from '$lib/components/Button.svelte';

  const { Story } = defineMeta({
    title: 'Layout/Stack',
    component: Stack,
    tags: ['autodocs'],
    argTypes: {
      direction: {
        control: { type: 'select' },
        options: ['vertical', 'horizontal'],
      },
      gap: {
        control: { type: 'select' },
        options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      },
    },
  });
</script>

<Story name="Vertical" args={{ direction: 'vertical', gap: 'md' }}>
  {#snippet children(args)}
    <Stack {...args}>
      <div style="padding: 16px; background: var(--surface-secondary); border-radius: var(--radius-md);">Item 1</div>
      <div style="padding: 16px; background: var(--surface-secondary); border-radius: var(--radius-md);">Item 2</div>
      <div style="padding: 16px; background: var(--surface-secondary); border-radius: var(--radius-md);">Item 3</div>
    </Stack>
  {/snippet}
</Story>

<Story name="Horizontal" args={{ direction: 'horizontal', gap: 'md' }}>
  {#snippet children(args)}
    <Stack {...args}>
      <Button>Cancel</Button>
      <Button variant="primary">Save</Button>
    </Stack>
  {/snippet}
</Story>

<Story name="Fill" args={{ direction: 'horizontal', gap: 'sm', fill: true }}>
  {#snippet children(args)}
    <div style="width: 400px;">
      <Stack {...args}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Stack>
    </div>
  {/snippet}
</Story>
