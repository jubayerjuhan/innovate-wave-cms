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
          {title: 'String', value: 'string'},
          {title: 'Number', value: 'number'},
          {title: 'Boolean', value: 'boolean'},
        ],
      },
    },
    {name: 'fieldWidth', title: 'Field Width', type: 'string'},
  ],
}

export default {
  name: 'contactUs',
  title: 'Contact Us',
  type: 'document',

  fields: [
    {
      name: 'pageInformation',
      title: 'Page Information',
      type: 'object',
      fields: [
        {name: 'title', title: 'Page Title', type: 'string'},
        {name: 'subtitle', title: 'Page Subtitle', type: 'string'},
        {name: 'description', title: 'Page Description', type: 'string'},
      ],
    },

    {
      name: 'contactUsForm',
      title: 'Contact Us Form',
      type: 'object',
      fields: [
        {name: 'title', title: 'Form Title', type: 'string'},
        {name: 'fields', title: 'Form Fields', type: 'array', of: [formField]},
      ],
    },
  ],
}
