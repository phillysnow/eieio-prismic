const Button = ({ label, white }) => {
  return (
    <button
      className={`flex 
      justify-center 
      items-center 
      rounded-lg 
      px-10 
      py-4 
      ${white ? 'text-darkGreen' : 'text-[#fff] bg-darkGreen'} 
      border-darkGreen
      border-2 shadow-lg `}
    >
      { label }
    </button>
  )
}

export default Button;