import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [valueNew, setValueNew] = useState(0);

  const setValueCountDecrement = React.useCallback(() => {
    setValue(value - 1);
    console.log("setValueCountDecrement");
  }, []);

  const setValueCountIncrement = React.useCallback(() => {
    setValue(value + 1);
    console.log("setValueCountIncrement");
  }, []);

  return (
    <div className="App">
      <div>
        <h4>Счетчик 1</h4>
        <TheButtons
          setValueCountDecrement={setValueCountDecrement}
          setValueCountIncrement={setValueCountIncrement}
          value={value}
        />
      </div>
      <div>
        <h4>Счетчик 2</h4>
        <button onClick={() => setValueNew(valueNew - 1)}>-</button>
        <IsIce value={valueNew} id="c2" />
        <button onClick={() => setValueNew(valueNew + 1)}> +</button>
      </div>
    </div>
  );
}

// const CountComponent = React.memo(({ id, value }) => {
//   console.log("CountComponent", "value: =" + value);
//   return <span>{value}</span>;
// });

const TheButtons = (props) => {
  return (
    <span>
      <button onClick={props.setValueCountDecrement}>-</button>
      <CountComponent value={props.value} id="c1" />
      <button onClick={props.setValueCountIncrement}> +</button>
    </span>
  );
};
const CountComponent = ({ id, value }) => {
  console.log("CountComponent", "value: =" + value);
  return <span>{value}</span>;
};

function IsIce({ value }) {
  console.log("IsIce", "value: =" + value);
  const getResult = React.useMemo(() => {
    console.log("IsIce getResult", "value: =" + value);
    let i = 0;
    while (i < 1000000000) i++;
    return value === 0 ? "ZERO" : value > 0 ? "HOT" : "COLD";
  }, [value]);
  return <span>{getResult}</span>;
}

export default App;
