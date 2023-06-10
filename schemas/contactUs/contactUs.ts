// export const moreWaysToContact = {}

import {formField} from './contactUs_formField'
import {moreWaysToContact} from './contactUs_moreWays'

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
    moreWaysToContact,
  ],
}
