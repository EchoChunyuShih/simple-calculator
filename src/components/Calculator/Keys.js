import React from 'react'
import { useContext } from 'react'
import CalcContext from '../../context/calculator/CalcContext'
import DigitButton from '../shared/DigitButton'
import Button from '../shared/Button'
import OperationButton from '../shared/OperationButton'

const Keys = () => {
  const { dispatch } = useContext(CalcContext)

  // const key = [
  //   7,
  //   8,
  //   9,
  //   '%',
  //   '+/-',
  //   4,
  //   5,
  //   6,
  //   'x',
  //   '/',
  //   1,
  //   2,
  //   3,
  //   '+',
  //   '-',
  //   0,
  //   '00',
  //   '.',
  //   '=',
  //   'ON/AC',
  // ]
  const clear = () => {
    dispatch({ type: 'CLEAR' })
  }
  const evaluate = () => {
    dispatch({ type: 'EVALUATE' })
  }
  const deleteDigit = () => {
    dispatch({ type: 'DELETE_DIGIT' })
  }
  return (
    <>
      <div className='grid-cols-5 grid gap-4'>
        <DigitButton digit='7' dispatch={dispatch} />
        <DigitButton digit='8' dispatch={dispatch} />
        <DigitButton digit='9' dispatch={dispatch} />
        <Button type='Del' dispatch={deleteDigit} />
        <Button type='ON/AC' dispatch={clear} />
        <DigitButton digit='4' dispatch={dispatch} />
        <DigitButton digit='5' dispatch={dispatch} />
        <DigitButton digit='6' dispatch={dispatch} />
        <OperationButton operation='x' dispatch={dispatch} />
        <OperationButton operation='÷' dispatch={dispatch} />
        <DigitButton digit='1' dispatch={dispatch} />
        <DigitButton digit='2' dispatch={dispatch} />
        <DigitButton digit='3' dispatch={dispatch} />
        <OperationButton operation='+' dispatch={dispatch} />
        <OperationButton operation='-' dispatch={dispatch} />
        <DigitButton digit='0' dispatch={dispatch} />
        <DigitButton digit='00' dispatch={dispatch} />
        <DigitButton digit='.' dispatch={dispatch} />
        <OperationButton operation='%' dispatch={dispatch} />
        <Button type='=' dispatch={evaluate} />
      </div>
    </>
  )
}

export default Keys
