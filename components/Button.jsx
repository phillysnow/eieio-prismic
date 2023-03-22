const Button = ({ label, white }) => {
  return (
    <button
      className={`flex 
      justify-center 
      items-center 
      rounded-lg 
      w-[170px] 
      h-[60px] 
      ${white ? 'text-[rgba(28,79,73,1)]' : 'text-[rgba(224,227,222,1)] bg-[rgba(28,79,73,1)]'} 
      border-[rgba(28,79,73,1)]
      border-2 shadow-lg `}
    >
      { label }
    </button>
  )
}

export default Button;