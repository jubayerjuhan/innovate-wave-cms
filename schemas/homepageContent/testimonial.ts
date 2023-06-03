const testimonial = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'description', title: 'Description', type: 'string'},
    {name: 'authorImage', title: 'Author Image', type: 'image'},
    {name: 'authorName', title: 'Author Name', type: 'string'},
    {name: 'authorDesignation', title: 'Author Designation', type: 'string'},
    {name: 'company', title: 'Company Name', type: 'string'},
  ],
}

export default {
  name: 'testimonialSection',
  title: 'Testimonial Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [testimonial],
    },
  ],
}
