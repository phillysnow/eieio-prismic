import Link from 'next/link'

const Button = ({ link, label }) => {
  return (
    <button
      className={`flex 
      justify-center
      font-semibold 
      items-center 
      rounded-lg 
      px-10 
      py-4 
      text-white
      bg-darkGreen 
      border-darkGreen
      border-2 shadow-lg `}
    >
      <Link href={ link }>{ label }</Link>
    </button>
  )
}

export default Button;