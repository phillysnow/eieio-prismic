import Image from 'next/image'
import ronda from '../images/ronda.png'

export function SplitButtonLeft() {
  return (
    <div
      className="flex justify-center items-center text-left w-screen h-[704px] bg-[rgba(245,243,239,1)] overflow-clip"
    >
      <div className="flex justify-center items-center w-[1280px] h-[512px]">
        <div className="gap-24 flex items-center w-[1216px] h-[512px]">
          <div
            className="flex-1 flex justify-center items-center h-[294px] w-[560px]"
          >
            <div
              className="flex justify-center items-center w-[560px] h-[294px]"
            >
              <div
                className="flex justify-center items-center w-[560px] h-[294px]"
              >
                <div
                  className="gap-4 flex flex-col items-start w-[560px] h-[294px]"
                >
                  <p
                    className={`text-3xl font-bold m-0 w-[560px] font-['Space_Grotesk'] leading-[38px] text-[rgba(28,79,73,1)] h-[38px]`}
                  >
                    Share team inboxes
                  </p>
                  <p
                    className={`text-lg font-normal leading-7 m-0 w-[560px] font-['Inter'] text-[rgba(28,79,73,1)] h-[140px]`}
                  >
                    As Mr. McDonald, I am excited to introduce eie.io, a farming solutions start-up that aims to revolutionize the way farmers work. Our company is dedicated to creating innovative solutions that help farmers increase their crop yields, reduce costs, and improve efficiency.
                  </p>
                  <div
                    className={`pt-6 flex flex-col items-start font-semibold w-[352px] h-[84px] font-['Inter']`}
                  >
                    <div
                      className="gap-3 flex items-start w-[352px] h-[60px]"
                    >
                      <div
                        className="flex justify-center items-center rounded-lg w-[170px] h-[60px] text-[rgba(28,79,73,1)]"
                      >
                        <div
                          className="[box-shadow:0px_0px_0px_2px_rgba(28,_79,_73,_1)_inset] [box-shadow-width:2px] flex justify-center items-center rounded-lg w-[170px] h-[60px] drop-shadow-lg overflow-clip"
                        >
                          <p className="text-lg leading-7 m-0 h-7 w-[114px]">
                            Call to action
                          </p>
                        </div>
                      </div>
                      <div
                        className="flex justify-center items-center rounded-lg w-[170px] h-[60px] text-[rgba(224,227,222,1)]"
                      >
                        <div
                          className="[box-shadow:0px_0px_0px_1px_rgba(28,_79,_73,_1)_inset] [box-shadow-width:1px] flex justify-center items-center rounded-lg w-[170px] h-[60px] drop-shadow-lg bg-[rgba(28,79,73,1)] overflow-clip"
                        >
                          <p className="text-lg leading-7 m-0 h-7 w-[114px]">
                            Call to action
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex-1 flex justify-center items-center overflow-clip rounded-3xl"
          >
            <Image
              src={ronda}
              alt="Mrs. McDonald"
              width={560}
              height={512}
            />
          </div>
        </div>
      </div>
    </div>
  )
}