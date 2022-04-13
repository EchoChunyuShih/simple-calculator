import { ACTIONS } from '../../context/calculator/CalcContext'
const DigitButton = ({ digit, dispatch }) => {
  return (
    <button
      className='h-10 rounded bg-base-300 inline-block align-middle text-center shadow-md gap-y-5 hover:bg-base-100 justify-items-stretch text-sm'
      onClick={() => {
        dispatch({ type: 'ADD_DIGIT', payload: { digit } })
      }}
      key={digit}
    >
      {digit}
    </button>
  )
}

export default DigitButton
