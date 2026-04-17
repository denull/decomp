<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Selector from '$lib/components/Selector.svelte';

  const { Story } = defineMeta({
    title: 'Primitives/Selector',
    component: Selector,
    tags: ['autodocs'],
    argTypes: {
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg'],
      },
    },
  });
</script>

<Story name="Default" args={{ options: ['Day', 'Week', 'Month'], value: 'Day' }} />

<Story name="Object Options" args={{
  options: [
    { title: 'Low', value: 'low' },
    { title: 'Medium', value: 'medium' },
    { title: 'High', value: 'high' },
  ],
  value: 'medium',
}} />

<Story name="Sizes">
  {#snippet template()}
    <div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-start;">
      <Selector size="sm" options={['One', 'Two', 'Three']} value="One" />
      <Selector size="md" options={['One', 'Two', 'Three']} value="Two" />
      <Selector size="lg" options={['One', 'Two', 'Three']} value="Three" />
    </div>
  {/snippet}
</Story>

<Story name="Many Options" args={{
  options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  value: 'M',
}} />
