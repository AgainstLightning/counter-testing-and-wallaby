import React from 'react'
import './App.css'
import CounterButton from './components/CounterButton'

function App({startingValue = 0} : {startingValue?: number}) {

  const clickHandler = (amount: number) => {}

  return (
    <div className="App">
      <h1>Awesome Counter</h1>
      <p data-testid="count">{startingValue}</p>
    </div>
  )
}

export default App
