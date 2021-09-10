import {useState} from 'react';
import './App.css';

function App(props) {
  const [counter, setCounters] = useState(0);

  const handleClick = (event) => {
    setCounters(counter + 1);
  }
  const handleMouseEnter = (event) => {
    console.log(event)
  }
  const handleMouseLeave = (event) => {
    console.log(event)
  }

  return (
      <button onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Click
        me {counter}!!!!!</button>
  );
}

export default App;
