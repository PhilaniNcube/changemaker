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
      options: {
        source: "title",
        maxLength: 96,
      },
		},
		{
			name: "subtitle",
			title: "Page Subtitle",
			type: "string",
      required: true,
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
    // reference to a list box
    {
      name: 'listBox',
      title: 'List Box Items',
      type: 'array',
      of: [{type: 'listBox'}],
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
    {
      name: 'sliderText',
      title: 'Slider Text',
      type: 'array',
      of: [{type: 'string'}],
    }
  ]
};

export const academyFocus = {
  name: "academyFocus",
  title: "Academy Page Focus",
  type: "document",
  fields: [
    {
      name: "first_list_title",
      title: "First List Title",
      type: "string",
    },
    {
      name: "first_list_items",
      title: "First List Items",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "second_list_title",
      title: "Second List Title",
      type: "string",
    },
    {
      name: "second_list_items",
      title: "Second List Items",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
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
      name: 'list_subtitle',
      title: 'List Subtitle',
      type: 'string',
    },
    {
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: [{type: 'page'}],
      required: true,
    }
	],
};


export const pageTextBoxes = {
	name: "pageTextBoxes",
	title: "Page Text Boxes",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			required: true,
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "page",
			title: "Page",
			type: "reference",
			to: [{ type: "page" }],
			required: true,
		},
		{
			name: "subtitle",
			title: "Subtitle",
			type: "string",
		},
	],
};

export const listBox = {
  name: "listBox",
  title: "List Box",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      required: true,
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      required: true,
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    // {
    //   name: "page",
    //   title: "Page",
    //   type: "reference",
    //   to: [{ type: "page" }],
    //   required: true,
    // },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
  ],
};


