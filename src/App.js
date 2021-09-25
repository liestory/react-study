import React, {useContext} from 'react';
import './App.css';

function App() {

    const myContext = React.createContext(1);

    const Comp1 = () => {
        const count = useContext(myContext);
        return <h2>{count}</h2>
    }


    const Comp2 = () => <Comp1/>
    const Comp3 = () => <Comp2/>

    const CompCheck = () => <myContext.Provider value={1}><Comp3/></myContext.Provider>

    return (
        <div className="App">
            <CompCheck/>
        </div>
    );
}

export default App;
