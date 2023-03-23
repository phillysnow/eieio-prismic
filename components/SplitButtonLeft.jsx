import Image from 'next/image'
import Button from "./Button";
import ronda from '@/images/ronda.png'

const SplitButtonLeft = () => {
  return (
    <div className="flex justify-center items-center w-screen bg-grey">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-24 min-h-[514px] items-center py-24">
        <div className="grid gap-4 items-start">
          <h3>
            Share team inboxes
          </h3>
          <p>
            As Mr. McDonald, I am excited to introduce eie.io, a farming solutions start-up that aims to revolutionize the way farmers work. Our company is dedicated to creating innovative solutions that help farmers increase their crop yields, reduce costs, and improve efficiency.
          </p>
          <div className="flex flex-col gap-3 justify-start font-semibold font-['Inter']">
            <div className="flex gap-3">
              <Button label="Call to Action" white={true}/>
              <Button label="Call to Action" white={false}/>
            </div>
          </div>
        </div>
        <Image src={ronda} alt="Mrs. McDonald" className="rounded-3xl" />
      </div>
    </div>
  )
}

export default SplitButtonLeft;