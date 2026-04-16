<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Checkbox from '$lib/components/Checkbox.svelte';
  import Field from '$lib/components/Field.svelte';

  const { Story } = defineMeta({
    title: 'Primitives/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: [null, 'radio'],
      },
      checked: { control: 'boolean' },
      disabled: { control: 'boolean' },
    },
  });

  let radioGroup = $state(1);
</script>

<Story name="Default" args={{ label: 'Accept terms' }} />

<Story name="Checked" args={{ label: 'Subscribe to newsletter', checked: true }} />

<Story name="Disabled" args={{ label: 'Unavailable option', disabled: true }} />

<Story name="Disabled Checked" args={{ label: 'Locked on', checked: true, disabled: true }} />

<Story name="Radio" args={{ variant: 'radio', label: 'Option A' }} />

<Story name="Checkbox Group">
  {#snippet template()}
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <Checkbox label="Email notifications" checked />
      <Checkbox label="SMS notifications" />
      <Checkbox label="Push notifications" checked />
      <Checkbox label="Newsletter" disabled />
    </div>
  {/snippet}
</Story>

<Story name="Radio Group">
  {#snippet template()}
    <Field label="Priority">
      <div style="display: flex; gap: 16px;">
        <Checkbox variant="radio" label="Low" bind:group={radioGroup} value={0} />
        <Checkbox variant="radio" label="Medium" bind:group={radioGroup} value={1} />
        <Checkbox variant="radio" label="High" bind:group={radioGroup} value={2} />
      </div>
    </Field>
  {/snippet}
</Story>
