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

export type NmbPageHero =  {
  nmbheading: string
  nmbSubtitle: string
  nmbHeroImage: {
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



export async function getNMBHero():Promise<NmbPageHero>{
  const nmbHero = await client.fetch(`*[_type == "nmbpageHero"]{nmbheading, nmbSubtitle, nmbHeroImage}[0]`)
  return nmbHero
}

export type NmbPageDescription = {
  descriptionText: string
}


export async function getNmbPageDescription():Promise<NmbPageDescription>{
  const nmbDescription = await client.fetch(`*[_type == "nmbDescription"]{descriptionText}[0]`)
  return nmbDescription
}

export type NmbPageFocus = {
  nmbfocuHeading: string
  nmbfocusSubheading: string
  nmbFocusList: string[]
  nmbfocusDescription: string
}

export async function nmbPageFocus():Promise<NmbPageFocus>{
  const nmbFocus = await client.fetch(`*[_type == "nmbfocus"]{nmbfocuHeading, nmbfocusSubheading, nmbFocusList, nmbfocusDescription}[0]`)
  return nmbFocus
}


export type NMBSchool = {
  schoolName: string
}

export async function getNMBSchools():Promise<NMBSchool[]>{
  const nmbSchools = await client.fetch(`*[_type == "nmbSchool"]{schoolName}`)
  return nmbSchools
}


export type NMBPageFunders = {
  funderName: string
  funderWebsite: string
  funderLogo: {
    asset: {
      _ref: string
    }
  }
}


export async function getNMBPageFunders():Promise<NMBPageFunders[]>{
  const nmbFunders = await client.fetch(`*[_type == "nmbFunders"]{funderName, funderWebsite, funderLogo}`)
  return nmbFunders
}


export type NationalPageHero = {
  heading: string
  subtitle: string
  image: {
    asset: {
      _ref: string
    }
  }
}

export async function getNationalPageHero():Promise<NationalPageHero>{
  const nationalHero = await client.fetch(`*[_type == "nationalHero"]{heading, subtitle, image}[0]`)
  return nationalHero
}


export type NationalPageDescription = {
  descriptionText: string
}

export async function getNationalPageDescription():Promise<NationalPageDescription>{
  const nationalDescription = await client.fetch(`*[_type == "nationalDescription"]{descriptionText}[0]`)
  return nationalDescription
}


export type ProvinceDescription = {
  descriptionText: string
}

export async function getProvinceDescription():Promise<ProvinceDescription>{
  const provinceDescription = await client.fetch(`*[_type == "provinceDescription"]{descriptionText}[0]`)
  return provinceDescription
}

export type NationalPageFocus = {
  focusHeading: string
  focusSubheading: string
  nationalList: string[]
  nationFocusDescription: PortableTextBlock[]

}


export async function getNationalPageFocus():Promise<NationalPageFocus>{
  const nationalFocus = await client.fetch(`*[_type == "nationalFocus"]{focusHeading, focusSubheading, nationalList, nationFocusDescription}[0]`)
  return nationalFocus
}


export type NationalPageRolePlayers = {
  title:string
  description:string
}

export async function getNationalPageRolePlayers():Promise<NationalPageRolePlayers[]>{
  const nationalRolePlayers = await client.fetch(`*[_type == "nationalRolePlayers"]{title, description}`)
  return nationalRolePlayers
}


export type NationalPagePartners = {
  partnerName: string
  partnerWebsite: string
  partnerLogo: {
    asset: {
      _ref: string
    }
  }
}

export async function getNationalPagePartners():Promise<NationalPagePartners[]>{
  const nationalPartners = await client.fetch(`*[_type == "nationalPartners"]{partnerName, partnerWebsite, partnerLogo}`)
  return nationalPartners
}


export type NisspHero = {
  heading: string
  subtitle: string
  image: {
    asset: {
      _ref: string
    }
  }
}

export async function getNisspHero():Promise<NisspHero>{
  const nisspHero = await client.fetch(`*[_type == "nisspPageHero"]{heading, subtitle, image}[0]`)
  return nisspHero
}


export type NisspDescription = {
  descriptionText: string
}

export async function getNisspDescription():Promise<NisspDescription>{
  const nisspDescription = await client.fetch(`*[_type == "niispdescription"]{descriptionText}[0]`)
  return nisspDescription
}
