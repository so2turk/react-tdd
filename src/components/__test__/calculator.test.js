import Calculator from '../calculator'
import { fireEvent, render, screen } from '@testing-library/react'

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

describe('tests for calculator fucntionality', () => {

  test('change input value', () => {
    render(<Calculator />)
    const inputEl = screen.getByTestId('input')

    fireEvent.change(inputEl, {
      target: {
        value: "2"
      }
    })

    expect(inputEl.value).toBe('2')
  })

  test('click on addBtn adds 1 to result', () => {
    render(<Calculator />)
    const addBtn = screen.getByTestId('add-btn')
    const resultEl = screen.getByTestId('result')

    expect(resultEl.textContent).toBe('0')
    fireEvent.click(addBtn)
    expect(resultEl.textContent).toBe('1')
  })

  test('click on subtBtn subtracts 1 from result', () => {
    render(<Calculator />)
    const subtBtn = screen.getByTestId('sbut-btn')
    const resultEl = screen.getByTestId('result')

    expect(resultEl.textContent).toBe('0')
    fireEvent.click(subtBtn)
    expect(resultEl.textContent).toBe('-1')
  })

  test('click on multBtn multiplies result', () => {
    render(<Calculator />)
    const inputEl = screen.getByTestId('input')
    const resultEl = screen.getByTestId('result')
    const addBtn = screen.getByTestId('add-btn')
    const multBtn = screen.getByTestId('mult-btn')

    fireEvent.change(inputEl, {
      target: {
        value: "2"
      }
    })
    expect(inputEl.value).toBe('2')
    expect(resultEl.textContent).toBe('0')
    fireEvent.click(addBtn)
    expect(resultEl.textContent).toBe('2')
    fireEvent.click(multBtn)
    expect(resultEl.textContent).toBe('4')
  })

  test('click on divBtn divides result', () => {
    render(<Calculator />)
    const inputEl = screen.getByTestId('input')
    const resultEl = screen.getByTestId('result')
    const addBtn = screen.getByTestId('add-btn')
    const divBtn = screen.getByTestId('div-btn')

    fireEvent.change(inputEl, {
      target: {
        value: "2"
      }
    })
    expect(inputEl.value).toBe('2')
    expect(resultEl.textContent).toBe('0')
    fireEvent.click(addBtn)
    expect(resultEl.textContent).toBe('2')
    fireEvent.click(divBtn)
    expect(resultEl.textContent).toBe('1')
  })

})