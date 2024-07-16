export const pageContent = {
	name: "page",
	title: "Page",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Page Title",
			type: "string",
			required: true,
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			required: true,
		},
		{
			name: "subtitle",
			title: "Page Subtitle",
			type: "string",
		},
		{
			name: "hero_image",
			title: "Hero Image",
			type: "image",
		},
		// reference to a page slider
		{
			name: "pageSlider",
			title: "Page Slider",
			type: "reference",
			to: [{ type: "pageSlider" }],
		},
		{
			name: "content",
			title: "Content",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "illustration",
			title: "Illustration",
			type: "image",
		},
		{
			name: "logo_carousel",
			title: "Logo Carousel",
			type: "array",
			of: [{ type: "image" }],
		},
	],
};

export const pageSlider = {
  name: 'pageSlider',
  title: 'Page Slider',
  type: 'document',
  fields: [
    {
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: [{type: 'page'}],
      required: true,
    },
    {
      name: 'images',
      title: 'Slider Images',
      type: 'array',
      of: [{type: 'image'}],
      required: true,

    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
  ]
};


export const pageList = {
	name: "page_list_group",
	title: "Page List Group",
	type: "document",
	fields: [

		{
			name: "list_items",
			title: "List Items",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "list_title",
			title: "List Title",
			type: "string",
			required: true,
		},
    {
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: [{type: 'page'}],
    }
	],
};
