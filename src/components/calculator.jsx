
const Calculator = () => {

  return (
    <>
      <h1 data-testid='title'>Calculator</h1>
      <h1 data-testid='result'>0</h1>
      <input data-testid='input' value={1} />
      <button data-testid='add-btn'>+</button>
      <button data-testid='subt-btn'>-</button>
      <button data-testid='mult-btn'>*</button>
      <button data-testid='div-btn'>÷</button>
    </>
  )
}

export default Calculator
