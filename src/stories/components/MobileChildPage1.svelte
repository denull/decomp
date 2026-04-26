<script>
  import List from '$lib/components/List.svelte';
  import ListItem from '$lib/components/ListItem.svelte';
  import ListSection from '$lib/components/ListSection.svelte';
  import { getContext } from 'svelte';
  import MobileChildPage2 from './MobileChildPage2.svelte';

  const nav = getContext('nav');
</script>

<List>
  <ListSection>
    <ListItem accessory="chevron" onclick={() => {
      nav.push({
        title: 'Page 2',
        view: MobileChildPage2,
      });
    }}>Child Page 2</ListItem>
  </ListSection>
</List>