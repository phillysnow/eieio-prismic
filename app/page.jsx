import TextCenter from '@/components/TextCenter'
import CallToActionButton from '@/components/CallToActionButton'
import SplitImageLeft from '@/components/SplitImageLeft'
import SplitButtonLeft from '@/components/SplitButtonLeft'
import Hero from '@/components/Hero'

export const metadata = {
  title: 'EIE - Engineering Intelligent Environments',
  description:
    'Farming solutions start-up that aims to revolutionize the way farmers work.',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <CallToActionButton />
      <SplitImageLeft />
      <SplitButtonLeft />
      <TextCenter />
    </main>
  )
}
