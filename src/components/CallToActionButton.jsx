export function CallToActionButton() {
  return (
    <div className="py-24 gap-16 inline-flex flex-col items-center text-center w-screen bg-[rgba(245,243,239,1)] text-[rgba(28,79,73,1)]">
      <div className="container gap-6 flex flex-col justify-center items-center">
        <h2 className="w-full text-4xl font-semibold font-['Space_Grotesk']">
          We will also offer a range of products, including soil sensors, drones, and automated machinery, to help farmers optimize their operations and minimize waste.
        </h2>
        <p className="text-xl font-normal m-0 max-w-[768px] font-['Inter'] leading-[30px]">
          As Mr. McDonald, I am excited to introduce eie.io, a farming solutions start-up that aims to revolutionize the way farmers work.
        </p>
        <button
          className="flex justify-center items-center rounded-lg w-[170px] h-[60px] text-[rgba(224,227,222,1)] bg-[rgba(28,79,73,1)] border-[rgba(28,79,73,1)] border-2 shadow-lg"
        >
          Call to action
        </button>
      </div>
    </div>
  );
}
