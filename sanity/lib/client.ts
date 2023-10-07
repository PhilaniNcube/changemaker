import {createClient} from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import { PortableTextBlock } from 'sanity'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export type HomepageHero =  {
  heading: string
  subtitle: string
  image: {
    asset: {
      _ref: string
    }
  }
}

export type HomepageContent = {
  objectiveTitle: string
  objectiveDescription: string
  homepageStory: string
  storyContent: PortableTextBlock[]
}

export type HomepageTimeline = {
  Year: string
  timelineDescription: string
}


export async function getHomepageHero():Promise<HomepageHero>{
  const homepageHero = await client.fetch(`*[_type == "homepageHero"]{heading, subtitle, image}[0]`)
  return homepageHero
}

export async function getHomepageContent():Promise<HomepageContent> {
  const homepageContent = await client.fetch(`*[_type == "homepageContent"]{objectiveTitle, objectiveDescription, homepageStory, storyContent}[0]`)
  return homepageContent
}
export async function getHomepageTimeline():Promise<HomepageTimeline[]> {
  const homepageTimeline = await client.fetch(`*[_type == "homepageTimeline"]{Year, timelineDescription}|order(Year asc)`)
  return homepageTimeline
}



