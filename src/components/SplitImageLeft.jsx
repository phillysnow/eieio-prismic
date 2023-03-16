import Image from 'next/image'
import plants from '../images/plants.png'

export function SplitImageLeft() {
  return (
    <div
      className="flex justify-center items-center text-left w-screen h-[704px] bg-[rgba(224,227,222,1)] overflow-clip text-[rgba(28,79,73,1)]"
    >
      <div className="flex justify-center items-center w-[1280px] h-[512px]">
        <div className="gap-24 flex items-center w-[1216px] h-[512px]">
          <div
            className="flex-1 flex justify-center items-center overflow-clip rounded-3xl"
          >
            <Image
              src={plants}
              alt="The future"
              width={560}
              height={512}
            />
          </div>
          <div
            className="flex-1 flex justify-center items-center h-[194px] w-[560px]"
          >
            <div
              className="flex justify-center items-center w-[560px] h-[194px]"
            >
              <div
                className="flex justify-center items-center w-[560px] h-[194px]"
              >
                <div
                  className="gap-4 flex flex-col items-start w-[560px] h-[194px]"
                >
                  <p
                    className={`text-3xl font-bold m-0 w-[560px] font-['Space_Grotesk'] leading-[38px] h-[38px]`}
                  >
                    Share team inboxes
                  </p>
                  <p
                    className={`text-lg font-normal leading-7 m-0 w-[560px] font-['Inter'] h-[140px]`}
                  >
                    As Mr. McDonald, I am excited to introduce eie.io, a farming solutions start-up that aims to revolutionize the way farmers work. Our company is dedicated to creating innovative solutions that help farmers increase their crop yields, reduce costs, and improve efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}