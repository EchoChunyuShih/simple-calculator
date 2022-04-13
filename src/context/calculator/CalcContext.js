import { createContext, useReducer } from 'react'
import calcReducer from './CalcReducer'

const CalcContext = createContext()
export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CLEAR: 'clear',
  DELETE_DIGET: 'delete-digit',
  CHOOSE_OPERATION: 'choose-operation',
  EVELUATE: 'evaluate',
}
export const CalcProvider = ({ children }) => {
  // const initialState = {
  //   currentOperand: {},
  //   previousOperand: {},
  //   operation: {},
  // }
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    calcReducer,
    {}
  )

  return (
    <CalcContext.Provider
      value={{
        currentOperand,
        previousOperand,
        operation,
        dispatch,
      }}
    >
      {children}
    </CalcContext.Provider>
  )
}
export default CalcContext
