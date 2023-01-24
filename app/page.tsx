import { Fragment } from 'react'
import Hero from './Hero'
import Mission from './Mission'
import NMB from './NMB'
import Image from 'next/image'


export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Mission />
      <NMB />
    </Fragment>
  )
}
