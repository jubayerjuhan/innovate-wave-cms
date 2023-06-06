export const footerColumnLinks = {
  name: 'footerLink',
  title: 'Footer Links',
  type: 'object',
  fields: [
    {name: 'footerLinkTitle', title: 'Footer Link Title', type: 'string'},
    {name: 'footerLink', title: 'Footer Link', type: 'string'},
  ],
}

export const footerLink = {
  name: 'footerColumn',
  title: 'Footer Column',
  type: 'array',
  of: [footerColumnLinks],
}

export const footerLinkColumn = {
  name: 'footerColumn',
  title: 'Footer Column',
  type: 'object',
  fields: [footerLink],
}

export const footerLinkFields = [
  {name: 'logo', title: 'Footer Logo', type: 'image'},
  {name: 'description', title: 'Footer Description', type: 'string'},
  {name: 'footerLinkColumns', title: 'Footer Link Columns', type: 'array', of: [footerLinkColumn]},
]

// main export file of footer
export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: footerLinkFields,
}
