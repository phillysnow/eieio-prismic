import Image from 'next/image'
import { Container } from './Container'
import PlayCircle from "../assets/PlayCircle";
import ronald from '../images/ronald.png'

export function Hero() {
  return (
    <Container>
      <div
        className="pt-24 flex flex-col items-center w-screen h-[904px] bg-[rgba(224,227,222,1)]"
      >
        <div className="gap-16 flex flex-col items-center w-[1440px] h-[808px]">
          <div
            className="flex justify-center items-center text-left w-[1280px] h-[512px]"
          >
            <div className="gap-24 flex items-center w-[1216px] h-[512px]">
              <div
                className="flex-1 flex justify-center items-center h-[366px] w-[560px]"
              >
                <div
                  className="gap-12 flex flex-col items-start w-[560px] h-[366px]"
                >
                  <div
                    className="flex justify-center items-center w-[560px] h-[258px] text-[rgba(28,79,73,1)]"
                  >
                    <div
                      className="gap-6 flex flex-col items-start w-[560px] h-[258px]"
                    >
                      <p
                        className={`font-bold m-0 h-36 w-[560px] font-['Space_Grotesk'] text-[60px] tracking-[-0.32px] leading-[72px]`}
                      >
                        Farming Made Easy with eie.io
                      </p>
                      <p
                        className={`text-xl font-normal m-0 w-[560px] font-['Inter'] leading-[30px] h-[90px]`}
                      >
                        As Mr. McDonald, I am excited to introduce eie.io, a farming solutions start-up that aims to revolutionize the way farmers work.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`flex justify-center items-center font-semibold w-[277px] h-[60px] font-['Inter']`}
                  >
                    <div className="gap-3 flex items-start w-[277px] h-[60px]">
                      <div
                        className="flex justify-center items-center rounded-lg w-[143px] h-[60px] text-[rgba(28,79,73,1)]"
                      >
                        <div
                          className="[box-shadow:0px_0px_0px_2px_rgba(28,_79,_73,_1)_inset] [box-shadow-width:2px] flex justify-center items-center rounded-lg w-[143px] h-[60px] drop-shadow-lg overflow-clip"
                        >
                          <div className="h-7 gap-3 flex items-center w-[87px]">
                            <PlayCircle />
                            <p className="text-lg leading-7 m-0 h-7 w-[51px]">
                              Demo
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex justify-center items-center rounded-lg w-[122px] h-[60px] text-[rgba(224,227,222,1)]"
                      >
                        <div
                          className="[box-shadow:0px_0px_0px_1px_rgba(28,_79,_73,_1)_inset] [box-shadow-width:1px] flex justify-center items-center rounded-lg w-[122px] h-[60px] drop-shadow-lg bg-[rgba(28,79,73,1)] overflow-clip"
                        >
                          <p className="text-lg leading-7 m-0 h-7 w-[66px]">
                            Sign up
                          </p>
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
                  src={ronald}
                  alt="Mr. McDonald"
                  width={560}
                  height={512}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
