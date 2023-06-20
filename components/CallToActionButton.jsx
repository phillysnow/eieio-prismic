import Button from './Button'

const CallToActionButton = () => {
  return (
    <div className="py-24 gap-16 inline-flex flex-col items-center text-center w-screen bg-grey">
      <div className="container gap-6 flex flex-col items-center">
        <h2>
          We will also offer a range of products, including soil sensors,
          drones, and automated machinery, to help farmers optimize their
          operations and minimize waste.
        </h2>
        <p>
          Embark on the journey towards smarter, more productive, and
          sustainable farming with eie.io&apos;s Tractors of the Future.
        </p>
        <Button
          link="https://en.wikipedia.org/wiki/Monoculture"
          label="Learn More"
          white={false}
        />
      </div>
    </div>
  )
}

export default CallToActionButton
