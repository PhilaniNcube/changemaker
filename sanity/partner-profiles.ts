export const provinces = {
  name: 'provinces',
  title: 'Provinces',
  type: 'document',
  fields: [
    {
      name: 'province',
      title: 'Province',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'province',
        maxLength: 96,
      },
    },
  ]
}

export const partnerProfiles = {
  name: 'partnerProfiles',
  title: 'Partner Profiles',
  type: 'document',
  fields: [
    {
      name: 'organisationName',
      title: 'Organisation Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'organisationName',
        maxLength: 96,
      },
    },
    {
      name: 'town',
      title: 'Town',
      type: 'string',
    },
    {
      name: 'district',
      title: 'District',
      type: 'string',
    },
    {
      name: 'province',
      title: 'Province',
      //  use a list of provinces from a list of strings an select only one item from the list as the value for the field
      type: 'string',
      options: {
        list: [
          'Eastern Cape',
          'Free State',
          'Gauteng',
          'KwaZulu-Natal',
          'Limpopo',
          'Mpumalanga',
          'North West',
          'Northern Cape',
          'Western Cape',

        ],
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'url',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    },
    {
      name: 'youtube',
      title: 'Youtube',
      type: 'url',
    },
    {
      name: 'contactPerson',
      title: 'Contact Person',
      type: 'string',
    },
    {
      name: 'contactNumber',
      title: 'Contact Number',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }]
    },

  ]
}
