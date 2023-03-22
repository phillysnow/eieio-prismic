export function Header() {
  return (
    <div className="h-24 flex justify-center items-center text-left font-semibold bg-[rgba(224,227,222,1)] font-['Inter']">
      <div className="container h-11 flex justify-between">
        <p className="h-6 text-[rgba(28,79,73,1)] text-xl leading-6 m-0">Eie.io</p>
        <div className="h-6 flex gap-8 items-start w-[425px] text-[rgba(28,79,73,1)]">
          <p className="text-base leading-6 m-0 h-6 w-[100px]">Our Services</p>
          <p className="text-base leading-6 m-0 h-6 w-[103px]">Case Studies</p>
          <p className="text-base leading-6 m-0 h-6 w-[54px]">Pricing</p>
          <p className="text-base leading-6 m-0 h-6 w-[72px]">About Us</p>
        </div>
      </div>
    </div>
  )
}
