const Button = ({ type, dispatch }) => {
  return (
    <button
      className={`h-10 rounded bg-base-300 inline-block align-middle text-center shadow-md gap-y-5 hover:bg-base-100 justify-items-stretch ${
        type.length > 3 ? `text-xs` : `text-sm`
      } 
      }`}
      onClick={dispatch}
      key={type}
    >
      {type}
    </button>
  )
}

export default Button
