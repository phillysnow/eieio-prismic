import Image from 'next/image'
import Button from './Button'
import ronda from '@/images/ronda.png'

const SplitButtonLeft = () => {
  return (
    <div className="flex justify-center items-center w-screen bg-grey">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-24 min-h-[514px] items-center py-24">
        <div className="flex flex-col gap-4 items-start">
          <h3>Share team inboxes</h3>
          <p>
            In addition, our tractors feature IoT connectivity, linking them
            with our Smart Seeds and cloud-based platform. This means they can
            respond to real-time data about crop growth, soil conditions, and
            weather forecasts, optimizing their operations to boost productivity
            and sustainability.
          </p>
          <Button link="https://www.smartseeds.fr/" label="Learn More" />
        </div>
        <Image
          src={ronda}
          alt="Mrs. McDonald"
          className="w-full h-auto rounded-3xl"
        />
      </div>
    </div>
  )
}

export default SplitButtonLeft
