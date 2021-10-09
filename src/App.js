import './App.css';
import React from 'react';
import Menu from "./component/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <header style={{'background-color': '#282c34'}}>
                <h1>Визитка Игоря</h1>
            </header>
            <Menu/>
        </div>
    );
}

export default App;
