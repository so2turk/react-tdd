import { useState } from "react"

const Calculator = () => {
  const [calculatorVal, setCalculatorVal] = useState(0)
  const [inputVal, setInputVal] = useState(1)

  const handlePlusMinus = (val) => {
    setCalculatorVal(calculatorVal + val)
  }

  const handleMultiplyDivide = (val) => {
    setCalculatorVal(calculatorVal * val)
  }
  
  return (
    <>
      <h1 data-testid='title'>Calculator</h1>
      <h1 data-testid='result'>{calculatorVal}</h1>
      <input
        data-testid='input'
        value={inputVal}
        type='number'
        onChange={(e) => setInputVal(1*e.target.value)}
      />
      <button
        data-testid='add-btn'
        onClick={() => handlePlusMinus(inputVal)}
      >+</button>
      <button
        data-testid='subt-btn'
        onClick={() => handlePlusMinus(-inputVal)}
      >-</button>
      <button
        data-testid='mult-btn'
        onClick={() => handleMultiplyDivide(inputVal)}
      >*</button>
      <button
        data-testid='div-btn'
        onClick={() => handleMultiplyDivide(1/inputVal)}
      >÷</button>
    </>
  )
}

export default Calculator
