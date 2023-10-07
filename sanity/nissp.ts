export const nisspHero = {
  name: 'nisspPageHero',
  title: 'NISSP Page Hero',
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


export const nisspDescription = {
  name: 'niispdescription',
  title: 'NISSP Page Description',
  type: 'document',
  fields: [
    {
      name: 'descriptionText',
      title: 'Description Text',
      type: 'string',
    }
  ]
}
