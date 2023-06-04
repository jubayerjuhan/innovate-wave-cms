// schemas/homepage.js

import OurServices from './OurServices'
import featureSection from './featureSection'
import heroSection from './heroSection'
import {ourClients} from './ourClients'
import testimonialSection from './testimonial'

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
    testimonialSection,
  ],
}
