import './App.css';
import React from 'react';
import NumericNature from "./NumericNature";


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <p>
            Введите колличество натуральных чисел
          </p>
          <NumericNature/>
        </header>
      </div>
  );
}


export default App;
