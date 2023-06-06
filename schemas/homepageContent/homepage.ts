// schemas/homepage.js

import OurServices from './OurServices'
import featureSection from './featureSection'
import footer from './footer'
import heroSection from './heroSection'
import {ourClients} from './ourClients'
import ourTeamsSection from './ourTeamsSection'
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
    ourTeamsSection,
  ],
}
