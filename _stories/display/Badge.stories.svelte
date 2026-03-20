<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Badge from '$lib/components/Badge.svelte';
  import Avatar from '$lib/components/Avatar.svelte';

  const { Story } = defineMeta({
    title: 'Display/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['default', 'primary', 'success', 'warning', 'danger'],
      },
      dot: { control: 'boolean' },
    },
  });
</script>

<Story name="Standalone">
  {#snippet children(args)}
    <div style="display: flex; gap: 12px; align-items: center;">
      <Badge value="New" />
      <Badge value="3" variant="primary" />
      <Badge value="OK" variant="success" />
      <Badge value="!" variant="warning" />
      <Badge value="5" variant="danger" />
    </div>
  {/snippet}
</Story>

<Story name="Dot">
  {#snippet children(args)}
    <div style="display: flex; gap: 12px; align-items: center;">
      <Badge dot />
      <Badge dot variant="primary" />
      <Badge dot variant="success" />
      <Badge dot variant="danger" />
    </div>
  {/snippet}
</Story>

<Story name="On Avatar">
  {#snippet children(args)}
    <div style="display: flex; gap: 24px; align-items: center;">
      <Badge value="3" variant="danger">
        <Avatar alt="John Doe" size="lg" />
      </Badge>
      <Badge dot variant="success">
        <Avatar alt="Jane Smith" size="lg" />
      </Badge>
    </div>
  {/snippet}
</Story>
