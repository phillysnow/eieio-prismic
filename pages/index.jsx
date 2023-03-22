import Head from 'next/head'

import CallToAction from '@/components/CallToAction'
import CallToActionButton from '@/components/CallToActionButton'
import SplitImageLeft from '@/components/SplitImageLeft'
import SplitImageRight from '@/components/SplitImageRight'
import SplitButtonLeft from '@/components/SplitButtonLeft'
import SplitButtonRight from '@/components/SplitButtonRight'
import TextWithVideo from '@/components/TextWithVideo'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const Home = () => {
  return (
    <>
      <Head>
        <title>EIE - Engineering Intelligent Environments</title>
        <meta
          name="description"
          content="Farming solutions start-up that aims to revolutionize the way farmers work."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <CallToActionButton />
        <SplitImageLeft />
        <SplitButtonLeft />
        <SplitImageRight />
        <SplitButtonRight />
        <CallToAction />
        <TextWithVideo />
      </main> 
    </>
  )
}

export default Home;