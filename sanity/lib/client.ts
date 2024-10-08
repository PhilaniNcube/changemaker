import {createClient} from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import type { PortableTextBlock } from 'sanity'
import type{ Page } from '@/app/studio/sanity.types'
import {groq} from 'next-sanity'

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
      _type: string
    }
  }
}

export type NmbPageHero =  {
  nmbheading: string
  nmbSubtitle: string
  nmbHeroImage: {
    asset: {
      _ref: string
      _type: string
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
  content: PortableTextBlock[]
}


export async function getNmbPageDescription():Promise<NmbPageDescription>{
  const nmbDescription = await client.fetch(`*[_type == "nmbDescription"]{descriptionText, content}[0]`)

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
  nmbfunderLogo: {
    asset: {
      _ref: string
      _type: string
    }
  }
}


export async function getNMBPageFunders():Promise<NMBPageFunders[]>{
  const nmbFunders = await client.fetch(`*[_type == "nmbFunders"]{funderName, funderWebsite, nmbfunderLogo}`)
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
  const nationalHero = await client.fetch(`*[_type == "nationalpageHero"]{heading, subtitle, image}[0]`)
  return nationalHero
}


export type NationalPageDescription = {
  descriptionText: PortableTextBlock[]
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
  const nationalFocus = await client.fetch(`*[_type == "nationalfocus"]{focusHeading, focusSubheading, nationalList, nationFocusDescription}[0]`)
  return nationalFocus
}


export type NationalPageRolePlayers = {
  title:string
  description:string
}

export async function getNationalPageRolePlayers():Promise<NationalPageRolePlayers[]>{
  const nationalRolePlayers = await client.fetch(`*[_type == "roleplayers"]{title, description}`)
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


// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export  async function getPartners():Promise<any[]>{
  const partners = await client.fetch(`*[_type == "partnerProfiles"] | order(organisationName asc){
    organisationName,
    description,
    logo,
    slug,
    district,
    town,
    province,
    images,
    website,
    facebook,
    instagram,
    twitter,
    youtube,
    contactPerson,
    contactNumber,
    email,
  }`);
  return partners
}

export type PageContent = {
  title: string
}

const PAGE_CONTENT_QUERY = groq`*[_type == "page" && slug.current == "$slug"]{
    title,
    slug,
    subtitle,
    hero_image,
    "pageSlider": *[_type == "pageSlider" && references(^._id)],
    "list_items": *[_type == "page_list_group" && references(^._id)]{
      list_title,
      list_items[],
      },
    content,
    illustration,
    logo_carousel,
    }[0]{
    slug
    }`;

export async function getPageContent(slug:string):Promise<Page>{
  console.log(slug)
  const content = await client.fetch(
			`*[_type == "page" && slug.current == "${slug}"]{
    title,
    slug,
    subtitle,
    hero_image,
    "pageSlider": *[_type == "pageSlider" && references(^._id)],
    "list_items": *[_type == "page_list_group" && references(^._id)]{
      list_title,
      list_items[],
      },
    content,
    illustration,
    logo_carousel,
    }[0]`,

		);

  return content
}

export async function getGlobalPageContent():Promise<Page>{

  const content = await client.fetch(
			`*[_type == "page" && slug.current == "global"]{
    title,
    slug,
    subtitle,
    hero_image,
    "pageSlider": *[_type == "pageSlider" && references(^._id)],
    "list_items": *[_type == "page_list_group" && references(^._id)]{
      list_title,
      list_items[],
      },
    listBox,
    content,
    illustration,
    logo_carousel,
    }[0]`,
		);

  return content
}

export async function getGlobalSlider(){
	const content = await client.fetch(
    `*[_type == "pageSlider" && _id == "46c53a91-c222-4d3f-86df-8ab4c7a4b721"]{
    _id,
      page->{
        title,
        slug
      },
      images,
      description
    }[0]`
  );

	return content;
}

export async function getPageLists(){
  const pageList = await client.fetch(
			`*[_type == "page_list_group"]{
      list_title,
      list_items[],
      "page": *[_type == "page" && references(^._id)]{
        title,
        slug
        }
      }`,
		);
  return pageList
}

export async function getGlobalPageList(){
  const pageList = await client.fetch(
			`*[_type == "page_list_group" && _id == "23a1b830-d739-49af-ba33-95551bb06df5"][0]{
      _id,
      list_title,
      list_subtitle,
      list_items[],
      }`,
		);
  return pageList
}
