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
      name: 'reverse',
      title: 'Reverse',
      type: 'boolean',
    },
    {
      name: 'bulletType',
      title: 'Bullet Type',
      type: 'string',
      options: {
        list: [
          {value: 'iconAndTitle', title: 'Icon and Title'},
          {value: 'iconOnly', title: 'Icon Only'},
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
