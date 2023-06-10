const contactCard = {
  name: 'contactCard',
  title: 'Contact Card',
  type: 'object',
  fields: [
    {name: 'title', title: 'Card Title', type: 'string'},
    {name: 'image', title: 'Card Image', type: 'image'},
    {name: 'description', title: 'Card Description', type: 'string'},
    {name: 'link', title: 'Card Link', type: 'string'},
  ],
}

const socialMedia = {
  name: 'socialMedia',
  title: 'Social Media',
  type: 'object',
  fields: [
    {name: 'title', title: 'Social Media Title', type: 'string'},
    {name: 'link', title: 'Social Media Link', type: 'string'},
    {name: 'logo', title: 'Social Media Logo', type: 'image'},
  ],
}

const socialMediaField = [
  {name: 'title', title: 'Card Title', type: 'string'},
  {name: 'image', title: 'Card Image', type: 'image'},
  {name: 'description', title: 'Card Description', type: 'string'},
  {name: 'socialMedias', title: 'Social Media Links', type: 'array', of: [socialMedia]},
]

export const moreWaysToContact = {
  name: 'moreWays',
  title: 'More Ways To Contact Us',
  type: 'object',
  fields: [
    {name: 'title', title: 'Section Title', type: 'string'},
    {name: 'subtitle', title: 'Section Subtitle', type: 'string'},
    {name: 'description', title: 'Section Description', type: 'string'},
    {name: 'contactCards', title: 'Contact Cards', type: 'array', of: [contactCard]},
    {name: 'socialMediaCard', title: 'Social Media Card', type: 'object', fields: socialMediaField},
  ],
}
