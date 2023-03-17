import Image from 'next/image'
import plants from '../images/plants.png'

export function SplitImageLeft() {
  return (
    <div className="flex justify-center items-center w-screen bg-[rgba(224,227,222,1)] text-[rgba(28,79,73,1)]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-24 items-center min-h-[512px] py-24">
        <Image src={plants} alt="The future" className="rounded-3xl"/>
        <div className="grid gap-4 items-start">
          <p className="text-3xl font-bold font-['Space_Grotesk']">
            Share team inboxes
          </p>
          <p className="text-lg font-normal leading-7 font-['Inter']">
            As Mr. McDonald, I am excited to introduce eie.io, a farming solutions start-up that aims to revolutionize the way farmers work. Our company is dedicated to creating innovative solutions that help farmers increase their crop yields, reduce costs, and improve efficiency.
          </p>
        </div>
      </div>
    </div>
  )
}
