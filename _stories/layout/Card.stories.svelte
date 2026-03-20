<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Card from '$lib/components/Card.svelte';
  import Button from '$lib/components/Button.svelte';
  import Stack from '$lib/components/Stack.svelte';

  const { Story } = defineMeta({
    title: 'Layout/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
      padding: {
        control: { type: 'select' },
        options: ['none', 'sm', 'md', 'lg'],
      },
    },
  });
</script>

<Story name="Default">
  {#snippet children(args)}
    <div style="width: 360px;">
      <Card>
        <p style="margin: 0; color: var(--text-secondary);">This is a simple card with default padding and styling.</p>
      </Card>
    </div>
  {/snippet}
</Story>

<Story name="With Header and Footer">
  {#snippet children(args)}
    <div style="width: 360px;">
      <Card>
        {#snippet header()}Edit Profile{/snippet}
        <p style="margin: 0; color: var(--text-secondary);">Update your personal information and preferences.</p>
        {#snippet footer()}
          <Stack direction="horizontal" gap="sm" justify="flex-end">
            <Button variant="ghost">Cancel</Button>
            <Button variant="primary">Save</Button>
          </Stack>
        {/snippet}
      </Card>
    </div>
  {/snippet}
</Story>

<Story name="Padding Variants">
  {#snippet children(args)}
    <Stack gap="lg">
      <Card padding="sm"><p style="margin: 0;">Small padding</p></Card>
      <Card padding="md"><p style="margin: 0;">Medium padding (default)</p></Card>
      <Card padding="lg"><p style="margin: 0;">Large padding</p></Card>
    </Stack>
  {/snippet}
</Story>
