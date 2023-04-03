import Button from "./Button";

const CallToActionButton = () => {
  return (
    <div className="py-24 gap-16 inline-flex flex-col items-center text-center w-screen bg-grey">
      <div className="container gap-6 flex flex-col items-center">
        <h2>
          We will also offer a range of products, including soil sensors, drones, and automated machinery, to help farmers optimize their operations and minimize waste.
        </h2>
        <p>
          As Mr. McDonald, I am excited to introduce eie.io, a farming solutions start-up that aims to revolutionize the way farmers work.
        </p>
        <Button link="https://www.google.com/" label="Call to Action" white={false}/>
      </div>
    </div>
  );
}

export default CallToActionButton;