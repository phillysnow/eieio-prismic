import Image from 'next/image'
import plants from '@/images/plants.png'

const SplitImageLeft = () => {
  return (
    <div className="flex justify-center items-center w-screen bg-greenGrey">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-24 items-center min-h-[512px] py-24">
        <Image src={plants} alt="The future" className="rounded-3xl"/>
        <div className="grid gap-4 items-start">
          <h3>
            Share team inboxes
          </h3>
          <p>
            As Mr. McDonald, I am excited to introduce eie.io, a farming solutions start-up that aims to revolutionize the way farmers work. Our company is dedicated to creating innovative solutions that help farmers increase their crop yields, reduce costs, and improve efficiency.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SplitImageLeft;