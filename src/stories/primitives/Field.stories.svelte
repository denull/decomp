<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Field from '$lib/components/Field.svelte';
  import Input from '$lib/components/Input.svelte';
  import Checkbox from '$lib/components/Checkbox.svelte';

  const { Story } = defineMeta({
    title: 'Primitives/Field',
    component: Field,
    tags: ['autodocs'],
    argTypes: {
      inline: { control: 'boolean' },
    },
  });

  let priority = $state(1);
</script>

<Story name="Basic">
  {#snippet template()}
    <Field label="Full Name">
      <Input placeholder="Jane Doe" />
    </Field>
  {/snippet}
</Story>

<Story name="Inline">
  {#snippet template()}
    <Field label="Email" inline>
      <Input variant="email" placeholder="jane@example.com" />
    </Field>
  {/snippet}
</Story>

<Story name="With Radio Group">
  {#snippet template()}
    <Field label="Priority">
      <div style="display: flex; gap: 12px;">
        <Checkbox variant="radio" label="Low" bind:group={priority} value={0} />
        <Checkbox variant="radio" label="Medium" bind:group={priority} value={1} />
        <Checkbox variant="radio" label="High" bind:group={priority} value={2} />
      </div>
    </Field>
  {/snippet}
</Story>

<Story name="Snippet Label">
  {#snippet template()}
    <Field>
      {#snippet label()}
        <strong>Styled</strong> <em>label</em>
      {/snippet}
      <Input placeholder="Value" />
    </Field>
  {/snippet}
</Story>

<Story name="No Label">
  {#snippet template()}
    <Field>
      <Input placeholder="Unlabeled input" />
    </Field>
  {/snippet}
</Story>
