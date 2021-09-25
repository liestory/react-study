import './App.css';
import React, {forwardRef, useImperativeHandle} from 'react';


function MyInput(props, ref) {
    const inputRef = React.useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));

    return (
        <div>
            <input type="text" ref={inputRef}/>

        </div>
    )
}

const MyInputHoc = forwardRef(MyInput);

function App() {
    const myAppRep = React.useRef();

    const onFocus = () => {
        return myAppRep.current.focus();
    }
    return (
        <div>
            <MyInputHoc ref={myAppRep}/>
            <button onClick={onFocus}>Click On focus</button>
        </div>
    )
}

export default App;
