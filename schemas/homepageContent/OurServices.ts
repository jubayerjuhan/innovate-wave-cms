const service = {
  name: 'service',
  title: 'Service',
  type: 'object',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'logo', title: 'Logo', type: 'image'},
    {name: 'description', title: 'Description', type: 'string'},
    {name: 'link', title: 'Link', type: 'string'},
  ],
}

export default {
  name: 'ourServices',
  title: 'Our Services',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [service],
    },
  ],
}
