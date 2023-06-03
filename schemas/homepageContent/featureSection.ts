import bulletPointWithIcon from './bulletPointWithIcon'

export default {
  name: 'featureSection',
  title: 'Feature Section',
  type: 'object',
  fields: [
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'orientation',
      title: 'Orientation',
      type: 'string',
      options: {
        list: [
          {title: 'Middle', value: 'middle'},
          {title: 'Left', value: 'left'},
        ],
      },
    },

    {
      name: 'bulletPoints',
      title: 'Bullet Points',
      type: 'array',
      of: [bulletPointWithIcon],
    },
  ],
}
