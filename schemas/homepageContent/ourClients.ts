export const client = {
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'logo', title: 'Logo', type: 'image'},
    {name: 'link', title: 'link', type: 'string'},
  ],
}

export const ourClients = {
  name: 'ourClients',
  title: 'Our Clients',
  type: 'array',
  of: [client],
}
