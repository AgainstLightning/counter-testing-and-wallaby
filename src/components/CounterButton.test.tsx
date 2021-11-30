import React from 'react'
import { render, screen } from '@testing-library/react'
import CounterButton from './CounterButton'
import userEvent from '@testing-library/user-event'


test('it renders', () => {
    render(<CounterButton amount={1} handler={() => {}} />)
    const btn = screen.getByTestId("iconBtn")
    expect(btn).toBeInTheDocument()
})

test('it renders "+amount" when provided positive amount prop', () => {
    render(<CounterButton amount={1} handler={() => {}} />)
    const btn = screen.getByTestId("iconBtn")
    expect(btn).toHaveTextContent("+1")
})

test('it renders amount prop as provided when negative', () => {
    render(<CounterButton amount={-4} handler={() => {}} />)
    const btn = screen.getByTestId("iconBtn")
    expect(btn).toHaveTextContent("-4")
})


test('it renders amount prop as provided when zero', () => {
    render(<CounterButton amount={0} handler={() => {}} />)
    const btn = screen.getByTestId("iconBtn")
    expect(btn).toHaveTextContent("0")
})

test('it fires handler prop when clicked', () => {
    const handler = jest.fn();    
    render(<CounterButton amount={0} handler={handler} />)
    const btn = screen.getByTestId("iconBtn")
    userEvent.click(btn)
    expect(handler).toHaveBeenCalledTimes(1)
})