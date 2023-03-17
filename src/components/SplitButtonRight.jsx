import Image from 'next/image'
import ronda from '../images/ronda.png'

export function SplitButtonRight() {
  return (
    <div className="flex justify-center items-center w-screen bg-[rgba(245,243,239,1)]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-24 min-h-[514px] items-center py-24">
        <Image src={ronda} alt="Mrs. McDonald" className="rounded-3xl" />
        <div className="grid gap-4 items-start">
          <p className="text-3xl font-bold font-['Space_Grotesk'] text-[rgba(28,79,73,1)]">
            Share team inboxes
          </p>
          <p className="text-lg font-normal leading-7 font-['Inter'] text-[rgba(28,79,73,1)]">
            As Mr. McDonald, I am excited to introduce eie.io, a farming solutions start-up that aims to revolutionize the way farmers work. Our company is dedicated to creating innovative solutions that help farmers increase their crop yields, reduce costs, and improve efficiency.
          </p>
          <div className="flex flex-col gap-3 justify-start font-semibold font-['Inter']">
            <div className="flex gap-3">
              <button
                className="flex justify-center items-center rounded-lg w-44 h-14 text-[rgba(28,79,73,1)] border-[rgba(28,79,73,1)] border-2 shadow-md"
              >
                Call to action
              </button>
              <button
                className="flex justify-center items-center rounded-lg w-44 h-14 text-[rgba(224,227,222,1)] bg-[rgba(28,79,73,1)] border-[rgba(28,79,73,1)] border-2 shadow-md"
              >
                Call to action
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
