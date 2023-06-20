import Image from 'next/image'
import Button from './Button'
import ronald from '@/images/ronald.png'

const Hero = () => {
  return (
    <div className="pt-12 pb-24 flex flex-col items-center w-screen bg-greenGrey">
      <div className="container grid grid-cols-1 md:grid-cols-2 text-left min-h-[512px] gap-24 items-center">
        <div className="grid gap-12 items-start">
          <h1>Farming Made Easy with eie.io</h1>
          <p>
            As Mr. McDonald, I am excited to introduce eie.io, a farming
            solutions start-up that aims to revolutionize the way farmers work.
          </p>
          <div className="items-start font-semibold">
            <Button
              link="https://en.wikipedia.org/wiki/Agriculture"
              label="Learn More"
            />
          </div>
        </div>
        <Image
          src={ronald}
          alt="Mr. McDonald"
          className="w-full h-auto rounded-3xl overflow-hidden"
        />
      </div>
    </div>
  )
}

export default Hero
