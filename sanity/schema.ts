import { type SchemaTypeDefinition } from 'sanity'
import homepageHero from './homepage-hero'
import { homepageContent, hompageTimeline } from './homepage-content'
import { nmbDescription, nmbFocus, nmbFunders, nmbHero, nmbSchools } from './nmb'
import { nationalDescription, nationalHero,nationalPartners, nationalRoleplayers, nationalFocus, provinceDescription } from './national'
import { nisspDescription, nisspHero } from './nissp'




export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepageHero, homepageContent, hompageTimeline, nmbHero, nmbDescription, nmbFocus,nmbSchools, nmbFunders, nationalHero, nationalDescription,  nationalRoleplayers, nationalFocus, provinceDescription, nationalPartners, nisspHero, nisspDescription],
}
