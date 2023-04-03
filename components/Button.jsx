import Link from 'next/link'

const Button = ({ link, label, white }) => {
  return (
    <button
      className={`flex 
      justify-center 
      items-center 
      rounded-lg 
      px-10 
      py-4 
      ${white ? 'text-darkGreen' : 'text-white bg-darkGreen'} 
      border-darkGreen
      border-2 shadow-lg `}
    >
      <Link href={ link }>{ label }</Link>
    </button>
  )
}

export default Button;