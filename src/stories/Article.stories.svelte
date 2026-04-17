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

  const { Story } = defineMeta({
    title: 'Article',
    tags: [],
    parameters: {
      layout: 'fullscreen',
    },
  });

</script>


<Story name="Article">
  <AppShell title="Hello World">
    <div class="card">
      Lorem Ipsum
    </div>

    {#snippet sidebar()}
      <List
        variant="nav"
        items={[
          'Page 1', 'Page 2', 'Page 3',
        ]}
      />
    {/snippet}
    {#snippet footer()}
      Footer
    {/snippet}
  </AppShell>

</Story>
<style>
  
</style>