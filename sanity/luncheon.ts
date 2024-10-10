export const luncheonBlocks = {
  name: 'luncheonBlocks',
  title: 'Luncheon Blocks',
  type: 'document',
  fields: [
    {
      name: 'blockTitle',
      title: 'Block Title',
      type: 'string',
    },
    {
      name: 'blocks',
      title: 'Description',
      type: 'array',
      of: [{type: 'string'}]
    },
  ],
};
