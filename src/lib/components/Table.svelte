<script>
  let {
    interactive = false,
    columns = [],
    rows = [],
    activeRowIndex = $bindable(null),
    sortedBy = $bindable([]),
  } = $props();

  function formatCell(row, col) {
    return typeof col.value == 'string' ? row[col.value] :
      col.value(row);
  }
  const sortedRows = $derived(rows.slice().sort((r1, r2) => {
    for (const col of sortedBy) {
      const v1 = formatCell(r1, columns[col.index]);
      const v2 = formatCell(r2, columns[col.index]);
      if (v1 != v2) {
        if (typeof v1 == 'number' && typeof v2 == 'number') {
          return (v1 - v2) * col.order;
        }
        return (v1 + '').localeCompare(v2 + '') * col.order;
      }
    }
    return 0;
  }));
</script>

<table
  class={[
    'table',
    interactive && 'is-interactive',
  ]}
>
  <thead>
    <tr>
      {#each columns as col, j}
        <th onclick={() => sortedBy = 
          sortedBy.length == 1 && sortedBy[0].index == j ?
          [{ index: j, order: -sortedBy[0].order }] :
          [{ index: j, order: 1 }]}>{col.title}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each sortedRows as row, i}
    <tr class={[activeRowIndex === i && 'is-active']} onclick={() => activeRowIndex = i}>
      {#each columns as col, j}
        <td>{formatCell(row, col)}</td>
      {/each}
    </tr>
    {/each}
  </tbody>
</table>