import { ACTIONS } from '../../context/calculator/CalcContext'
const OperationButton = ({ operation, dispatch }) => {
  return (
    <button
      className='h-10 rounded bg-base-300 inline-block align-middle text-center shadow-md gap-y-5 hover:bg-base-100 justify-items-stretch text-sm'
      onClick={() => {
        dispatch({ type: 'CHOOSE_OPERATION', payload: { operation } })
      }}
      key={operation}
    >
      {operation}
    </button>
  )
}

export default OperationButton
