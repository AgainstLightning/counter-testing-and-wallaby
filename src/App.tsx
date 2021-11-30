import React from 'react';
import './App.css';

function App({startingValue = 0} : {startingValue?: number}) {
  return (
    <div className="App">
      <h1>Awesome Counter</h1>
      <p data-testid="count">{startingValue}</p>
    </div>
  );
}

export default App;
