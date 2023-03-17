import Image from 'next/image'
import PlayCircle from "../assets/PlayCircle";
import ronald from '../images/ronald.png'

export function Hero() {
  return (
    <div className="pt-12 pb-24 flex flex-col items-center w-screen bg-[rgba(224,227,222,1)]">
      <div className="container grid grid-cols-1 md:grid-cols-2 text-left min-h-[512px] gap-24 items-center">
        <div className="grid gap-12 items-start">
          <p className={`font-bold font-['Space_Grotesk'] text-6xl text-[rgba(28,79,73,1)]`}>
            Farming Made Easy with eie.io
          </p>
          <p className={`text-xl font-normal font-['Inter']`}>
            As Mr. McDonald, I am excited to introduce eie.io, a farming solutions start-up that aims to revolutionize the way farmers work.
          </p>
          <div className="flex gap-3 items-start">
            <button
              className="flex gap-2 justify-center items-center rounded-lg w-44 h-14 text-[rgba(28,79,73,1)] border-[rgba(28,79,73,1)] border-2 shadow-md"
            >
              <PlayCircle />
              Demo
            </button>
            <button
              className="flex justify-center items-center rounded-lg w-44 h-14 text-[rgba(224,227,222,1)] bg-[rgba(28,79,73,1)] border-[rgba(28,79,73,1)] border-2 shadow-md"
            >
              Sign Up
            </button>
          </div>
        </div>
        <Image src={ronald} alt="Mr. McDonald" className="rounded-3xl overflow-hidden" />
      </div>
    </div>
  )
}
