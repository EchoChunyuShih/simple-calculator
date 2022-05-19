import { current } from 'daisyui/src/colors'
import React, { useContext, useState } from 'react'

import CalcContext from '../../context/calculator/CalcContext'
import Keys from './Keys'

const Calculator = () => {
  const { previousOperand, currentOperand, operation } = useContext(CalcContext)
  const [errmsg, setErrmsg] = useState('error')
  const IntergerFormatter = new Intl.NumberFormat('en-us', {
    maximumFractionDigits: 0,
  })
  const formatOperand = (operand) => {
    if (operand == null) return
    const [interger, decimal] = operand.split('.')
    if (decimal == null) return IntergerFormatter.format(interger)
    return `${IntergerFormatter.format(interger)}.${decimal}`
  }
  console.log(currentOperand == undefined)
  return (
    <>
      <div className='hero py-10 w-100 bg-base-200'>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-primary rounded-lg'>
          <div className='card-body'>
            <div className='w-full max-w-xs input-bordered input-lg mb-2 bg-amber-100 text-right text'>
              <div className='text-sm text-base-content h-4'>
                {formatOperand(previousOperand)}
                {operation}
                {/* <div className='text-xs text-base-content absolute left-50'>
                  {currentOperand !== undefined && currentOperand.length > 12
                    ? errmsg
                    : ''}
                </div> */}
              </div>
              <div className='text-3xl left-50 text-right '>
                {formatOperand(currentOperand)}
              </div>
            </div>
            <Keys />
          </div>
        </div>
      </div>
    </>
  )
}

export default Calculator
