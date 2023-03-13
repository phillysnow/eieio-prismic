import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { CallToActionButton } from '@/components/CallToActionButton'
import { SplitImageLeft } from '@/components/SplitImageLeft'
import { SplitImageRight } from '@/components/SplitImageRight'
import { SplitWithVideo } from '@/components/SplitWithVideo'
import { Faqs } from '@/components/Faqs'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <CallToActionButton />
        <SplitImageLeft />
        <SplitImageRight />
        <CallToAction />
        <SplitWithVideo />
        <Faqs />
      </main> 
    </>
  )
}
