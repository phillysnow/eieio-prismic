import Head from 'next/head'

import TextCenter from '@/components/TextCenter'
import CallToActionButton from '@/components/CallToActionButton'
import SplitImageLeft from '@/components/SplitImageLeft'
import SplitButtonLeft from '@/components/SplitButtonLeft'
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
        <TextCenter />
        <TextWithVideo />
      </main> 
    </>
  )
}

export default Home;