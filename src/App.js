import './App.css';
import React from 'react';

let TittleContext = React.createContext({title: "title"});


class Level3 extends React.Component {
    static contextTypes = TittleContext;

    render() {
        return (
            <h2>{this.context.title}</h2>
        )
    }
}

const Level2 = () => <Level3/>
const Level1 = () => <Level2/>

class App extends React.Component {

    render() {
        return (
            <TittleContext.Provider value={{title: 'level App'}}>
                <Level1/>
            </TittleContext.Provider>
        )
    }
}


export default App;
