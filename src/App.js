import './App.css';
import React from 'react';

// const level1 = ({title}) => <level2 title={title}></level2>
// const level2 = ({title}) => <level3 title={title}></level3>
// const level3 = ({title}) => <h2 title={title}></h2>
// const App = () => <level1 title="level App"></level1>
let TittleContext = React.createContext();

const level3 = () => <TittleContext.Consumer> {({title}) => <h2>{title}</h2>}</TittleContext.Consumer>
const level2 = () => <level3></level3>
const level1 = () => <level2></level2>
const App = () => {
    return (
        <TittleContext.Provider value={{title: 'level App'}}>
            <level1></level1>
        </TittleContext.Provider>
    )
}

export default App;
