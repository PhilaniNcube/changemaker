import createImageUrlBuilder from '@sanity/image-url'
import imageUrlBuilder from "@sanity/image-url";
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'

const imageBuilder = imageUrlBuilder({
	projectId: projectId || "",
	dataset: dataset || "",
});

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const urlFor = (source:any) => imageBuilder.image(source);

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
