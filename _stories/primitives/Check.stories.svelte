<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Check from '$lib/components/Check.svelte';

  const { Story } = defineMeta({
    title: 'Primitives/Check',
    component: Check,
    tags: ['autodocs'],
    argTypes: {
      type: {
        control: { type: 'select' },
        options: ['checkbox', 'radio', 'toggle'],
      },
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg'],
      },
      checked: { control: 'boolean' },
      disabled: { control: 'boolean' },
    },
  });
</script>

<Story name="Checkbox" args={{ type: 'checkbox' }}>
  {#snippet children()}Accept terms and conditions{/snippet}
</Story>

<Story name="Radio Group">
  {#snippet template(args)}
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <Check type="radio" name="fruit" value="apple" group="apple">Apple</Check>
      <Check type="radio" name="fruit" value="banana" group="apple">Banana</Check>
      <Check type="radio" name="fruit" value="cherry" group="apple">Cherry</Check>
    </div>
  {/snippet}
</Story>

<Story name="Toggle" args={{ type: 'toggle' }}>
  {#snippet children()}Enable notifications{/snippet}
</Story>

<Story name="Sizes">
  {#snippet template(args)}
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; align-items: center; gap: 24px;">
        <Check type="checkbox" size="sm" checked>Small</Check>
        <Check type="checkbox" size="md" checked>Medium</Check>
        <Check type="checkbox" size="lg" checked>Large</Check>
      </div>
      <div style="display: flex; align-items: center; gap: 24px;">
        <Check type="radio" size="sm" checked>Small</Check>
        <Check type="radio" size="md" checked>Medium</Check>
        <Check type="radio" size="lg" checked>Large</Check>
      </div>
      <div style="display: flex; align-items: center; gap: 24px;">
        <Check type="toggle" size="sm" checked>Small</Check>
        <Check type="toggle" size="md" checked>Medium</Check>
        <Check type="toggle" size="lg" checked>Large</Check>
      </div>
    </div>
  {/snippet}
</Story>

<Story name="Disabled">
  {#snippet template(args)}
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <Check type="checkbox" disabled>Disabled unchecked</Check>
      <Check type="checkbox" disabled checked>Disabled checked</Check>
      <Check type="toggle" disabled>Disabled toggle</Check>
      <Check type="toggle" disabled checked>Disabled toggle on</Check>
    </div>
  {/snippet}
</Story>
