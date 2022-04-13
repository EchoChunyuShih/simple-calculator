const evaluate = (state) => {
  const prev = parseFloat(state.previousOperand)
  const curr = parseFloat(state.currentOperand)
  if (isNaN(prev) || isNaN(curr)) return ''
  let computation = ''
  switch (state.operation) {
    case '+':
      computation = prev + curr
      break
    case '-':
      computation = prev - curr
      break
    case 'x':
      computation = prev * curr
      break
    case '÷':
      computation = prev / curr
      break
    case '%':
      computation = prev % curr
      break
    default:
      return state
  }
  return computation.toString()
}
const calcReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DIGIT':
      if (state.overwrite)
        return {
          ...state,
          currentOperand: action.payload.digit,
          overwrite: false,
        }
      if (action.payload.digit === '0' && state.currentOperand === '0')
        return state
      if (action.payload.digit === '.' && state.currentOperand.includes('.'))
        return state
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${action.payload.digit}`,
      }
    case 'CLEAR':
      return {}
    case 'DELETE_DIGIT':
      if (state.overwrite)
        return {
          ...state,
          currentOperand: null,
          overwrite: false,
        }
      if (state.currentOperand == null) return state
      if (state.currentOperand.length === 1)
        return { ...state, currentOperand: null }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      }
    case 'CHOOSE_OPERATION':
      if (state.currentOperand == null && state.previousOperand == null)
        return state
      if (state.currentOperand == null)
        return {
          ...state,
          operation: action.payload.operation,
        }
      if (state.previousOperand == null)
        return {
          ...state,
          operation: action.payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: action.payload.operation,
        currentOperand: null,
      }
    case 'EVALUATE':
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.currentOperand == null
      ) {
        return state
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      }

    default:
      return action
  }
}
export default calcReducer
