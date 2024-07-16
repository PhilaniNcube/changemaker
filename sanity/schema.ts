import type { SchemaTypeDefinition } from "sanity";
import homepageHero from './homepage-hero'
import { homepageContent, hompageTimeline } from './homepage-content'
import { nmbDescription, nmbFocus, nmbFunders, nmbHero, nmbSchools } from './nmb'
import { nationalDescription, nationalHero,nationalPartners, nationalRoleplayers, nationalFocus, provinceDescription } from './national'
import { nisspDescription, nisspHero } from './nissp'
import { partnerProfiles, provinces } from './partner-profiles'
import { pageContent, pageList, pageSlider } from "./page_content";




export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		pageContent,
		pageList,
		pageSlider,
		homepageHero,
		homepageContent,
		hompageTimeline,
		nmbHero,
		nmbDescription,
		nmbFocus,
		nmbSchools,
		nmbFunders,
		nationalHero,
		nationalDescription,
		nationalRoleplayers,
		nationalFocus,
		provinceDescription,
		nationalPartners,
		nisspHero,
		nisspDescription,
		partnerProfiles,
		provinces,
	],
};
