import { PrismicNextLink } from '@prismicio/next'

const Button = ({ link, label }) => {
  return (
    <button
      className={
        'flex justify-center items-center px-10 py-4 font-sans font-semibold text-white bg-darkGreen border-darkGreen border-2 rounded-lg shadow-lg'
      }
    >
      <PrismicNextLink field={link}>{label}</PrismicNextLink>
    </button>
  )
}

export default Button
