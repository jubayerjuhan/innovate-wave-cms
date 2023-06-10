export const formField = {
  name: 'field',
  fieldTitle: 'Field',
  type: 'object',
  fields: [
    {name: 'fieldName', title: 'Field Name', type: 'string'},
    {name: 'fieldTitle', title: 'Field Title', type: 'string'},
    {name: 'fieldPlaceholder', title: 'Field Placeholder', type: 'string'},
    {
      name: 'fieldType',
      title: 'Field Type',
      type: 'string',
      options: {
        list: [
          {title: 'Select', value: 'select'},
          {title: 'String', value: 'string'},
          {title: 'Number', value: 'number'},
          {title: 'Boolean', value: 'boolean'},
        ],
      },
    },
    {
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      hidden: ({parent}: any) => parent.fieldType !== 'select',
    },
    {name: 'fieldWidth', title: 'Field Width', type: 'string'},
  ],
}
