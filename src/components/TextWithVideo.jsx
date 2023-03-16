export function TextWithVideo() {
  return (
    <div
      className="flex justify-center items-center text-center w-screen h-[950px] bg-[rgba(245,243,239,1)] text-[rgba(28,79,73,1)]"
    >
      <div className="gap-16 flex flex-col items-start w-[1280px] h-[758px]">
        <div className="h-36 flex justify-center items-center w-[1280px]">
          <div
            className="h-36 flex justify-center items-center self-stretch w-[1216px]"
          >
            <div className="h-36 flex justify-center items-center w-[1024px]">
              <div
                className="h-36 gap-6 flex flex-col items-center w-[1024px]"
              >
                <p
                  className={`text-5xl font-semibold m-0 w-[1024px] font-['Space_Grotesk'] tracking-[-0.32px] leading-[60px] h-[60px]`}
                >
                  Farming Made Easy with eie.io
                </p>
                <p
                  className={`text-xl font-normal m-0 w-[768px] font-['Inter'] leading-[30px] h-[60px]`}
                >
                  As Mr. McDonald, I am excited to introduce eie.io, a farming solutions start-up that aims to revolutionize the way farmers work.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center items-center"
        >
          <iframe width="1280" height="550" src="https://www.youtube.com/embed/ig5Ly8MBFOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}
