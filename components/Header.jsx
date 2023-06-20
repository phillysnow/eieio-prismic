const Header = () => {
  return (
    <div className="h-24 flex justify-center items-center font-semibold bg-greenGrey">
      <div className="container flex justify-between">
        <span className="text-xl leading-6">Eie.io</span>
        <ul className="flex gap-8">
          <li>Our Services</li>
          <li>Case Studies</li>
          <li>Pricing</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
