import featureSection from '../homepageContent/featureSection'

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
  ],
}
