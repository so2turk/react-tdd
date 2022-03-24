import Calculator from '../calculator'
import { render, screen } from '@testing-library/react'

describe('tests for calculator setup', () => {
  
  it('tests title', () => {
    render(<Calculator />)
    const titleEl = screen.getByTestId('title')

    expect(titleEl.textContent).toBe('Calculator')
  })

  it('tests results initial value', () => {
    render(<Calculator />)
    const resultEl = screen.getByTestId('result')

    expect(resultEl.textContent).toBe('0')
  })

  it('tests input', () => {
    render(<Calculator />)
    const inputEl = screen.getByTestId('input')

    expect(inputEl.value).toBe('1')
  })

  it('add button renders with +', () => {
    render(<Calculator />)
    const addBtn = screen.getByTestId('add-btn')

    expect(addBtn.textContent).toBe('+')
  })

  it('subtract button renders with -', () => {
    render(<Calculator />)
    const subtBtn = screen.getByTestId('subt-btn')

    expect(subtBtn.textContent).toBe('-')
  })

  it('multiply button renders with *', () => {
    render(<Calculator />)
    const multBtn = screen.getByTestId('mult-btn')

    expect(multBtn.textContent).toBe('*')
  })

  it('divide button renders with ÷', () => {
    render(<Calculator />)
    const divBtn = screen.getByTestId('div-btn')

    expect(divBtn.textContent).toBe('÷')
  })

})