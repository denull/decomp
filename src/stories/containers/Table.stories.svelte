<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Table from '$lib/components/Table.svelte';
  import Button from '$lib/components/Button.svelte';

  const { Story } = defineMeta({
    title: 'Containers/Table',
    component: Table,
    tags: ['autodocs'],
    argTypes: {
      interactive: { control: 'boolean' },
    },
  });

  const teamColumns = [
    { title: 'Name', value: 'name' },
    { title: 'Role', value: 'role' },
    { title: 'Department', value: 'department' },
  ];

  const teamRows = [
    { name: 'Alice Chen', role: 'Frontend Developer', department: 'Engineering' },
    { name: 'Bob Park', role: 'Backend Developer', department: 'Engineering' },
    { name: 'Charlie Kim', role: 'DevOps Engineer', department: 'Operations' },
    { name: 'Diana Lee', role: 'UI Designer', department: 'Design' },
    { name: 'Eve Wang', role: 'Product Manager', department: 'Product' },
  ];
</script>

<Story name="Simple" args={{ columns: teamColumns, rows: teamRows, rowKey: 'name' }} />

<Story name="Interactive (Selectable)" args={{
  columns: teamColumns,
  rows: teamRows,
  rowKey: 'name',
  interactive: true,
}} />

<Story name="Computed Value">
  {#snippet template()}
    <Table
      columns={[
        { title: 'Product', value: 'name' },
        { title: 'Price', value: (row) => `$${row.price.toFixed(2)}` },
        { title: 'Stock', value: (row) => row.stock > 0 ? `${row.stock} left` : 'Out of stock' },
      ]}
      rows={[
        { name: 'Widget', price: 12.5, stock: 42 },
        { name: 'Gadget', price: 29.99, stock: 0 },
        { name: 'Gizmo', price: 7.25, stock: 8 },
      ]}
      rowKey="name"
    />
  {/snippet}
</Story>

<Story name="Custom Cell Snippets">
  {#snippet template()}
    <Table
      columns={[
        { title: 'Name', value: 'name', view: 'name' },
        { title: 'Role', value: 'role' },
        { title: 'Status', value: 'status', view: 'status' },
        { title: '', view: 'actions' },
      ]}
      rows={[
        { name: 'Alice Chen', role: 'Frontend', status: 'Active' },
        { name: 'Bob Park', role: 'Backend', status: 'Away' },
        { name: 'Charlie Kim', role: 'DevOps', status: 'Offline' },
      ]}
      rowKey="name"
      interactive
    >
      {#snippet name(row)}
        <td style="font-weight: 600;">{row.name}</td>
      {/snippet}
      {#snippet status(row)}
        <td>
          <span style="font-size: 12px; padding: 2px 8px; border-radius: 10px;
            background: {row.status === 'Active' ? '#d4f4dd' : row.status === 'Away' ? '#fff3cd' : '#e9ecef'};
            color: {row.status === 'Active' ? '#1a7f37' : row.status === 'Away' ? '#7a5c00' : '#5f6368'};">
            {row.status}
          </span>
        </td>
      {/snippet}
      {#snippet actions(row)}
        <td><Button size="sm">Edit</Button></td>
      {/snippet}
    </Table>
  {/snippet}
</Story>

<Story name="Sortable (Click Headers)" args={{
  columns: [
    { title: 'Product', value: 'name' },
    { title: 'Price', value: 'price' },
    { title: 'Units Sold', value: 'sold' },
  ],
  rows: [
    { name: 'Apples', price: 1.2, sold: 340 },
    { name: 'Bananas', price: 0.5, sold: 890 },
    { name: 'Cherries', price: 4.75, sold: 120 },
    { name: 'Dates', price: 6.2, sold: 55 },
  ],
  rowKey: 'name',
}} />
