<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import List from '$lib/components/List.svelte';
  import ListItem from '$lib/components/ListItem.svelte';
  import ListSection from '$lib/components/ListSection.svelte';
  import Button from '$lib/components/Button.svelte';
  import Input from '$lib/components/Input.svelte';
  import Tabs from '$lib/components/Tabs.svelte';
  import Table from '$lib/components/Table.svelte';
  import Checkbox from '$lib/components/Checkbox.svelte';
  import Progress from '$lib/components/Progress.svelte';
  import Selector from '$lib/components/Selector.svelte';
  import Switch from '$lib/components/Switch.svelte';
  import Slider from '$lib/components/Slider.svelte';
  import Spinner from '$lib/components/Spinner.svelte';
  import Dialog from '$lib/components/Dialog.svelte';
  import Field from '$lib/components/Field.svelte';
  import AppShell from '$lib/components/AppShell.svelte';
  import MobileChildPage1 from './components/MobileChildPage1.svelte';

  const { Story } = defineMeta({
    title: 'Mobile',
    tags: [],
    parameters: {
      layout: 'fullscreen',
    },
  });

  let shell = $state();

  function gotoX(depth) {
    shell.push({
      title: `Child at depth ${depth}`,
      view: 'tasks',
      data: { depth },
    });
  }
</script>

<Story name="Mobile">
  <AppShell bind:this={shell} sections={[{
    id: 'tasks',
    title: 'Tasks',
    view: 'tasks',
    data: { depth: 0 },
  }, {
    id: 'settings',
    title: 'Settings',
  }]} selected="tasks" withHeader>
    {#snippet tasks({ depth })}
      <List>
        <ListSection header="Section 1">
          <ListItem accessory="chevron" onclick={() => gotoX(depth + 1)}>Go deeper!</ListItem>
          <ListItem accessory="chevron" onclick={() => {
            shell.push({
              title: 'Child 1',
              view: MobileChildPage1,
            });
          }}>To ChildPage1</ListItem>
          <ListItem accessory="switch">Toggle</ListItem>
        </ListSection>
      </List>
    {/snippet}
  </AppShell>
</Story>
<style>
  
</style>