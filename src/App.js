import "./App.css";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { InputSwitch } from "primereact/inputswitch";
import { Card } from "primereact/card";
import React from "react";

function App() {
  const [value, setValue] = React.useState("");
  const [valueNumber, setValueNmber] = React.useState(0);
  const [valueSwitch, setvalueSwitch] = React.useState("");

  return (
    <Card
      footer={
        <span>
          <input type="submit" />
        </span>
      }
    >
      <from>
        <span className="p-float-label">
          <InputText
            id="in"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <label htmlFor="in">First Name</label>
        </span>
        <span className="p-float-label">
          <InputNumber
            value={valueNumber}
            onValueChange={(e) => setValueNmber(e.value)}
            mode="decimal"
          />
          {/* <label>Age</label> */}
        </span>
        <span>
          <InputSwitch
            checked={valueSwitch}
            onChange={(e) => setvalueSwitch(e.value)}
          />
        </span>
      </from>
    </Card>
  );
}

export default App;
