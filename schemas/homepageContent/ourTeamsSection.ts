export const teamMember = {
  name: 'teamMember',
  title: 'Team Member',
  type: 'object',
  fields: [
    {name: 'image', title: 'Image', type: 'image'},
    {name: 'teamMemberName', title: 'Team Member Name', type: 'string'},
    {name: 'teamMemberRole', title: 'Team Member Role', type: 'string'},
    {name: 'email', title: 'Email', type: 'string'},
    {name: 'linkedIn', title: 'LinkedIn', type: 'string'},
    {name: 'twitter', title: 'Twitter', type: 'string'},
  ],
}

export default {
  name: 'ourTeamsSection',
  title: 'Our Team Section',
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
      name: 'orientation',
      title: 'Orientation',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Middle', value: 'middle'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [teamMember],
    },
  ],
}
