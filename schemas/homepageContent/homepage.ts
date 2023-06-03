// schemas/homepage.js

import OurServices from './OurServices'
import featureSection from './featureSection'
import heroSection from './heroSection'
import {ourClients} from './ourClients'
import testimonial from './testimonial'

export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'featureSections',
      title: 'Feature Sections',
      type: 'array',
      of: [featureSection],
    },
    heroSection,
    ourClients,
    OurServices,
    testimonial,

    {
      name: 'ourTeam',
      title: 'Our Team Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
      ],
    },
  ],
}
