<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Avatar from '$lib/components/Avatar.svelte';

  const { Story } = defineMeta({
    title: 'Display/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg', 'xl'],
      },
    },
  });
</script>

<Story name="With Initials" args={{ alt: 'John Doe', size: 'lg' }}>
  {#snippet children(args)}
    <Avatar {...args} />
  {/snippet}
</Story>

<Story name="With Image" args={{ src: 'https://i.pravatar.cc/128?img=3', alt: 'User', size: 'lg' }}>
  {#snippet children(args)}
    <Avatar {...args} />
  {/snippet}
</Story>

<Story name="Sizes">
  {#snippet children(args)}
    <div style="display: flex; align-items: center; gap: 12px;">
      <Avatar size="sm" alt="Small" />
      <Avatar size="md" alt="Medium" />
      <Avatar size="lg" alt="Large" />
      <Avatar size="xl" alt="Extra Large" />
    </div>
  {/snippet}
</Story>

<Story name="Fallback on Error" args={{ src: 'https://invalid-url.test/broken.jpg', alt: 'Broken Image', size: 'lg' }}>
  {#snippet children(args)}
    <Avatar {...args} />
  {/snippet}
</Story>
