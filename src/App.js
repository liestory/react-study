import './App.css';
import React from 'react';
import Menu from "./component/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyPractics from "./component/MyPractics";
import Issues from "./component/Issues";
import {BrowserRouter, Route, Switch,} from "react-router-dom";
// import

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <header style={{'background-color': '#282c34'}}>
                    <h1>/>---------------------------/></h1>
                    <Menu/>
                </header>


                <Switch>
                    <Route path="/features">
                        <MyPractics/>
                    </Route>
                    <Route path="/Issues">
                        <Issues/>
                    </Route>
                    <Route path="/">
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
