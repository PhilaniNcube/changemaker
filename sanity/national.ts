export const nationalHero = {
  name: 'nationalpageHero',
  title: 'National Page Hero',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
  ],
}

export const nationalDescription = {
  name: 'nationalDescription',
  title: 'National Page Description',
  type: 'document',
  fields: [
    {
      name: 'descriptionText',
      title: 'Description Text',
      type: 'string',
    }
  ]
}

export const provinceDescription = {
  name: 'provinceDescription',
  title: 'National Page Province Description',
  type: 'document',
  fields: [
    {
      name: 'descriptionText',
      title: 'Description Text',
      type: 'string',
    }
  ]
}

export const nationalFocus = {
  name: 'nationalfocus',
  title: 'National Page Focus',
  type: 'document',
  fields: [
    {
      name: 'focusHeading',
      title: 'Focus Heading',
      type: 'string',
    },
    {
      name: 'focusSubheading',
      title: 'Focus Subheading',
      type: 'string',
    },
    {
      name: 'nationalList',
      title: 'National Focus List',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'nationFocusDescription',
      title: 'National Focus Description',
      type: 'array',
      of: [{type: 'block'}]
    }
  ]
}

export const nationalRoleplayers = {
  name: 'roleplayers',
  title: 'National Page Roleplayers',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    }

  ]
}


export const nationalPartners = {
  name: 'partners',
  title: 'National Page Partners',
  type: 'document',
  fields: [
    {
      name: 'funderName',
      title: 'Funder Name',
      type: 'string',
    },
    {
      name: 'funderWebsite',
      title: 'Funder Website',
      type: 'string',
    },
    {
      name: 'funderLogo',
      title: 'Funder Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ]
}
