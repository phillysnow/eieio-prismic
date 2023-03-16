import { Container } from './Container'

export function Header() {
  return (
    <div
      className={`h-24 flex justify-center items-center text-left font-semibold bg-[rgba(224,227,222,1)] font-['Inter']`}
    >
      <div className="h-11 flex justify-center items-center w-[1280px]">
        <div className="h-11 flex items-center w-[1216px] gap-[165.5px]">
          <div
            className="h-6 flex justify-center items-center w-[230px] text-[rgba(28,79,73,1)]"
          >
            <p className="text-xl leading-6 m-0 h-6 w-[230px]">Eie.io</p>
          </div>
          <div
            className="h-6 flex justify-center items-center w-[425px] text-[rgba(28,79,73,1)]"
          >
            <div className="h-6 gap-8 flex items-start w-[425px]">
              <p className="text-base leading-6 m-0 h-6 w-[100px]">
                Our Services
              </p>
              <p className="text-base leading-6 m-0 h-6 w-[103px]">
                Case Studies
              </p>
              <p className="text-base leading-6 m-0 h-6 w-[54px]">
                Pricing
              </p>
              <p className="text-base leading-6 m-0 h-6 w-[72px]">
                About Us
              </p>
            </div>
          </div>
          <div className="h-11 flex justify-center items-center w-[230px]">
            <div className="h-11 gap-3 flex items-start w-[230px]">
              <div
                className="[box-shadow:0px_0px_0px_2px_rgba(28,_79,_73,_1)_inset] [box-shadow-width:2px] h-11 flex justify-center items-center rounded-lg w-[123px] drop-shadow-lg overflow-clip text-[rgba(28,79,73,1)]"
              >
                <p className="text-base leading-6 m-0 h-6 w-[87px]">
                  Book demo
                </p>
              </div>
              <div
                className="[box-shadow:0px_0px_0px_1px_rgba(28,_79,_73,_1)_inset] [box-shadow-width:1px] h-11 flex justify-center items-center rounded-lg w-[95px] drop-shadow-lg bg-[rgba(28,79,73,1)] overflow-clip text-[rgba(224,227,222,1)]"
              >
                <p className="text-base leading-6 m-0 h-6 w-[59px]">
                  Sign up
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
