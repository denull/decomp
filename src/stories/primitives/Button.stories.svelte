<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from '$lib/components/Button.svelte';

  const { Story } = defineMeta({
    title: 'Primitives/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['default', 'primary', 'destructive', 'ghost'],
      },
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg'],
      },
      disabled: { control: 'boolean' },
      loading: { control: 'boolean' },
    },
  });
</script>

<!-- Single-button stories: children snippet becomes Button's children prop -->
<Story name="Default" args={{ variant: 'default' }}>
  {#snippet children()}Button{/snippet}
</Story>

<Story name="Primary" args={{ variant: 'primary' }}>
  {#snippet children()}Primary{/snippet}
</Story>

<Story name="Destructive" args={{ variant: 'destructive' }}>
  {#snippet children()}Delete{/snippet}
</Story>

<Story name="Ghost" args={{ variant: 'ghost' }}>
  {#snippet children()}Ghost{/snippet}
</Story>

<!-- Multi-button stories: template snippet for full rendering control -->
<Story name="Sizes">
  {#snippet template(args)}
    <div style="display: flex; align-items: center; gap: 12px;">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  {/snippet}
</Story>

<Story name="All Variants">
  {#snippet template(args)}
    <div style="display: flex; flex-wrap: wrap; gap: 12px;">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>
  {/snippet}
</Story>

<Story name="Grouped / Segment Control">
  {#snippet template(args)}
    <div style="display: flex;">
      <Button grouped selected>Day</Button>
      <Button grouped>Week</Button>
      <Button grouped>Month</Button>
    </div>
  {/snippet}
</Story>

<Story name="Icon Button">
  {#snippet template(args)}
    <div style="display: flex; gap: 12px;">
      <Button variant="ghost">
        {#snippet leading()}<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v14M1 8h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>{/snippet}
      </Button>
      <Button variant="primary">
        {#snippet leading()}<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v14M1 8h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>{/snippet}
        Add Item
      </Button>
    </div>
  {/snippet}
</Story>
