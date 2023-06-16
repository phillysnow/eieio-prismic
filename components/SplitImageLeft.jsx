import Image from 'next/image'
import plants from '@/images/plants.png'

const SplitImageLeft = () => {
  return (
    <div className="flex justify-center items-center w-screen bg-greenGrey">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-24 items-center min-h-[512px] py-24">
        <Image
          src={plants}
          alt="The future"
          className="w-full h-auto rounded-3xl"
        />
        <div className="flex flex-col gap-4 items-start">
          <h3>A Revolution in Agriculture!</h3>
          <p>
            Discover eie.io&apos;s Smart Seeds, a groundbreaking innovation in
            agriculture. Our AI-enhanced, data-driven seeds optimize resource
            usage, increase yield, and resist pests and diseases. Join the
            future of sustainable farming with Smart Seeds. Learn more about our
            revolutionary technology today.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SplitImageLeft
