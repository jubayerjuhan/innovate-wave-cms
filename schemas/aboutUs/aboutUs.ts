import featureSection from '../homepageContent/featureSection'
import ourTeamsSection from '../homepageContent/ourTeamsSection'

export default {
  name: 'aboutUs',
  title: 'About Us',
  type: 'document',
  fields: [
    {
      name: 'featureSections',
      title: 'Feature Sections',
      type: 'array',
      of: [featureSection],
    },
    {
      name: 'pageLink',
      title: 'Page Link',
      type: 'object',
      fields: [
        {name: 'link', title: 'Link', type: 'string'},
        {name: 'title', title: 'Title', type: 'string'},
      ],
    },
    ourTeamsSection,
  ],
}
