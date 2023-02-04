import { Fragment } from 'react'
import Hero from './Hero'
import Mission from './Mission'
import Link from 'next/link'
import NMBDetails from './NMBDetails'
import NMBFocus from './NMBFocus'
import NationalHero from "./NationalHero";
import NationalDetails from "./NationalDetails";
import NationalFocus from "./NationalFocus";



export default function Home() {
  return (
    <Fragment>
      <div className="flex justify-center items-center space-x-6 py-4 bg-accent text-black">
        <p className="text-sm lg:text-lg font-medium">
          Want to become a partner?
        </p>
        <Link
          href="/partner-area"
          className="border-2 border-black rounded-full px-2 lg:px-12 py-2 lg:py-2 text-base font-bold"
        >
          Learn More
        </Link>
      </div>
      <Hero />
      <Mission />
      <NMBDetails />
      <NMBFocus />
      <NationalHero />
      <NationalDetails />
      <NationalFocus />
    </Fragment>
  );
}
