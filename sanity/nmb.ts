export const nmbHero = {
  name: 'nmbpageHero',
  title: 'NMB Page Hero',
  type: 'document',
  fields: [
    {
      name: 'nmbheading',
      title: 'NMB Page Heading',
      type: 'string',
    },
    {
      name: 'nmbSubtitle',
      title: 'NMB Subtitle',
      type: 'string',
    },
    {
        name: 'nmbHeroImage',
        title: 'NMB Hero Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
  ],
}

export const nmbDescription = {
  name: "nmbDescription",
  title: "NMB Page Description",
  type: "document",
  fields: [
    {
      name: "descriptionText",
      title: "Description Text",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export const nmbFocus = {
  name: "nmbfocus",
  title: "NMB Page Focus",
  type: "document",
  fields: [
    {
      name: "nmbfocuHeading",
      title: "Focus Heading",
      type: "string",
    },
    {
      name: "nmbfocusSubheading",
      title: "NMB Focus Subheading",
      type: "string",
    },
    {
      name: "nmbFocusList",
      title: "NMB Focus List",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "nmbfocusDescription",
      title: "NMB Focus Description",
      type: "string",
    },

  ],
};

export const nmbSchools = {
  name: 'nmbSchools',
  title: 'NMB Page Schools',
  type: 'document',
  fields: [
    {
      name: 'schoolName',
      title: 'School Name',
      type: 'string',
    },

  ]
}


export const nmbFunders = {
  name: 'nmbFunders',
  title: 'NMB Page Funders',
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
      name: 'nmbfunderLogo',
      title: 'NMB Funder Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ]
}
