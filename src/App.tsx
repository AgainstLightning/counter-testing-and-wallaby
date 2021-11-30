import React from 'react';
import './App.css';

function App({startingValue = 0} : {startingValue?: number}) {
  return (
    <div className="App">
      <h1>Awesome Counter</h1>
      <p data-testid="count">{startingValue}</p>
      <button data-testid="addBtn">+</button>
      <button data-testid="subtractBtn">-</button>
    </div>
  );
}

export default App;
