const homepageContent = {
  name: 'homepageContent',
  title: 'Homepage Content',
  type: 'document',
  fields: [
    {
      name: 'objectiveTitle',
      title: 'Objective Title',
      type: 'string'
    },
    {
      name: 'objectiveDescription',
      title: 'Objective Description',
      type: 'string'
    },
    {
      name: 'homepageStory',
      title: 'Homepage Story Title',
      type: 'string'
    },
    {
      name: 'storyContent',
      title: 'Story Content',
       type: 'array',
        of: [{type: 'block'}]
    }

  ]
}

const hompageTimeline = {
  name: 'homepageTimeline',
  title: 'Homepage Timeline',
  type: 'document',
  fields: [
    {
      name: 'Year',
      title: 'Timeline Year',
      type: 'string'
    },
    {
      name: 'timelineDescription',
      title: 'Timeline Description',
      type: 'string'
    },
  ]
}


export {homepageContent, hompageTimeline}
