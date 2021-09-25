import React, {useState} from 'react';
import './App.css';

function App() {
    const [counter, setCounters] = useState(0);

    const showViews = () => {
        setCounters(counter + 1);
    }

    return (
        <div className="App">
            <div>
                <button onClick={showViews}> Show Counter: {counter}</button>
            </div>

        </div>
    );
}

export default App;
